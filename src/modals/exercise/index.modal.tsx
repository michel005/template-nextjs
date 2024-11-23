'use client'

import Button from '@/components/button'
import Modal from '@/components/modal'
import useModal from '@/hook/useModal'
import { ExerciseType } from '@/types/training.type'
import Grid from '@/components/grid'
import Text from '@/components/form/text'
import { useEffect } from 'react'
import useForm from '@/hook/useForm/useForm'
import Tabs from '@/components/tabs'
import { ExerciseMeasureType } from '@/constants/exerciseMeasureType'
import { ExecutionPlanTab } from '@/modals/exercise/executionPlanTab'
import { ExerciseDescription } from '@/app/private/training/[id]/exerciseDescription'
import style from './index.module.scss'
import useError from '@/hook/useError'
import useApi from '@/hook/useApi'
import useApiService from '@/hook/useApiService'
import useMessage from '@/hook/useMessage'

export const ExerciseModal = () => {
    const modal = useModal<ExerciseType>('exercise')
    const form = useForm<ExerciseType>('exerciseForm')
    const error = useError('exerciseForm')
    const apiService = useApiService()
    const api = useApi(async () => {
        console.log(form.form)
        if (form.form.id) {
            await apiService.exercise.update({
                id: form.form.id,
                exercise: form.form,
            })
        } else {
            await apiService.exercise.create({
                exercise: form.form,
            })
        }
    })
    const apiRemove = useApi(async () => {
        if (form.form.id) {
            await apiService.exercise.remove({
                id: form.form.id,
            })
        }
    })
    const message = useMessage()

    useEffect(() => {
        if (apiRemove.status === 'SUCCESS') {
            modal.close()
        }
    }, [apiRemove.status])

    useEffect(() => {
        if (api.status === 'SUCCESS') {
            modal.close()
        }
        if (api.status === 'ERROR') {
            error.updateErrors(api.error)
        }
    }, [api.status])

    useEffect(() => {
        form.updateForm(() => JSON.parse(JSON.stringify(modal.value)))
        error.clear()
    }, [])

    return (
        <Modal
            buttons={
                <>
                    {form.form?.id && (
                        <Button
                            icon="delete"
                            variant="ghost"
                            onClick={() => {
                                message.question(
                                    'Deseja realmente excluir esse exercício?',
                                    '',
                                    () => {
                                        apiRemove.run()
                                    }
                                )
                            }}
                        >
                            Excluir
                        </Button>
                    )}
                    <Button
                        icon="save"
                        onClick={() => {
                            api.run()
                        }}
                    >
                        Salvar
                    </Button>
                </>
            }
            onClose={() => {
                modal.close()
            }}
        >
            <h2>
                {modal.value.name} {modal.value.order}
            </h2>
            <Grid data-form="exerciseForm">
                <Text label="Nome do treino" field="name" />
                <Text label="Descrição" field="description" type="textarea" />
                <Tabs
                    tabs={Object.keys(ExerciseMeasureType).map(
                        (measureType) => {
                            return {
                                id: measureType,
                                label: ExerciseMeasureType[measureType],
                                content: (
                                    <ExecutionPlanTab
                                        key={measureType}
                                        exercise={form.form}
                                    />
                                ),
                            }
                        }
                    )}
                    initialSelected={form.form?.measure_type || 'SERIES'}
                    onChangeTab={(_, after) => {
                        form.updateFormField('measure_type', after.id)
                    }}
                />
                <Text label="Dropset" field="drops" type="number" />
            </Grid>
            <Grid rows="auto 1fr" className={style.resume}>
                <h3>Resumo</h3>
                <div className={style.description}>
                    <ExerciseDescription exercise={form.form} />
                </div>
            </Grid>
        </Modal>
    )
}
