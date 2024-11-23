'use client'

import Page from '@/components/page'
import style from './page.module.scss'
import useApi from '@/hook/useApi'
import useApiService from '@/hook/useApiService'
import { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import useForm from '@/hook/useForm/useForm'
import { ExerciseType, TrainingType } from '@/types/training.type'
import Text from '@/components/form/text'
import Group from '@/components/form/group'
import Select from '@/components/form/select'
import Grid from '@/components/grid'
import { Weekday } from '@/constants/weekday'
import { useParams, useRouter } from 'next/navigation'
import Button from '@/components/button'
import useModal from '@/hook/useModal'
import { ExerciseCard } from '@/app/private/training/[id]/exerciseCard'
import { UserContext } from '@/context/user.context'
import clsx from 'clsx'

const TrainingFormPage = ({ params }: { params: { id: string } }) => {
    const searchParams = useParams()
    const router = useRouter()
    const apiService = useApiService()
    const api = useApi(
        async () =>
            await apiService.training.getOne({
                id: params.id,
            })
    )
    const apiRemove = useApi(async ({ exerciseId }) => {
        await apiService.exercise.remove({
            id: exerciseId,
        })
    })
    const apiUpdate = useApi(async ({ exercise }) => {
        await apiService.exercise.update({
            id: exercise.id,
            exercise,
        })
    })
    const form = useForm<TrainingType>('trainingForm')
    const modal = useModal<ExerciseType>('exercise')
    const newTraining = searchParams.id === 'new'
    const { dragEvent, setDragEvent } = useContext(UserContext)
    const [dragButtonEffect, setDragButtonEffect] =
        useState<ExerciseType | null>(null)

    useEffect(() => {
        if (api.status === 'SUCCESS') {
            form.updateForm(() => api.response || undefined)
        }
        if (api.status === 'ERROR') {
            router.push('/private/training')
        }
    }, [api.status])

    useEffect(() => {
        if (apiRemove.status === 'SUCCESS') {
            api.run()
        }
    }, [apiRemove.status])

    useEffect(() => {
        if (apiUpdate.status === 'SUCCESS') {
            api.run()
        }
    }, [apiUpdate.status])

    useEffect(() => {
        if (!newTraining && !modal.value) {
            api.run()
        }
    }, [modal.value])

    useEffect(() => {
        if (!newTraining) {
            api.run()
        }
    }, [])

    const disableForm = useMemo(
        () => form.form?.status !== 'OPEN',
        [form.form?.status]
    )

    return (
        <Page className={style.trainingPage} loading={api.status === 'LOADING'}>
            <h1>{newTraining ? 'Novo Treino' : form.form?.name}</h1>
            <Group form="trainingForm">
                <Grid columns="auto 1fr">
                    <img
                        alt=""
                        className={style.trainingImage}
                        src="https://i.pinimg.com/736x/43/6e/9d/436e9df000f857d26f9fe6dc71094b58.jpg"
                    />
                    <Grid>
                        <Text
                            label="Nome do Treino"
                            field="name"
                            disabled={disableForm}
                        />
                        <Select
                            label="Dia da Semana"
                            options={Object.keys(Weekday).map((weekday) => ({
                                key: weekday,
                                label: Weekday[parseInt(weekday)],
                            }))}
                            field="weekday"
                            disabled={disableForm}
                        />
                        <Text
                            label="Data de Vencimento"
                            field="expiration_date"
                            mask="date"
                            disabled={disableForm}
                        />
                    </Grid>
                </Grid>
            </Group>
            {!newTraining && (
                <>
                    <h3>Exercícios</h3>
                    <div>
                        <Grid className={style.trainingList}>
                            {!disableForm && (
                                <Button
                                    icon="add"
                                    onClick={() => {
                                        modal.open({
                                            order: 5,
                                            training_id: form.form.id,
                                            name: 'Novo Exercício',
                                            measure_type: 'SERIES',
                                            execution_plan: {},
                                        })
                                    }}
                                >
                                    Novo Exercício
                                </Button>
                            )}
                            {api.response?.exercises?.map(
                                (exercise, exerciseIndex) => {
                                    const buttonOrder =
                                        (exerciseIndex + 1) * 10 + 5
                                    return (
                                        <Fragment key={exercise.id}>
                                            {(!disableForm ||
                                                exerciseIndex !== 0) && (
                                                <div
                                                    className={
                                                        style.connectionLine
                                                    }
                                                />
                                            )}
                                            <ExerciseCard
                                                key={exercise.id}
                                                training={form.form}
                                                exercise={exercise}
                                                index={exerciseIndex}
                                                apiRemove={apiRemove}
                                                apiUpdate={apiUpdate}
                                            />
                                            {!disableForm && (
                                                <div
                                                    className={
                                                        style.connectionLine
                                                    }
                                                />
                                            )}
                                            {!disableForm && (
                                                <Button
                                                    icon="add"
                                                    className={clsx(
                                                        style.addButton,
                                                        dragButtonEffect?.id ===
                                                            exercise.id &&
                                                            style.dragEffect
                                                    )}
                                                    onDragEnter={(e) => {
                                                        e.preventDefault()
                                                    }}
                                                    onDragLeave={(e) => {
                                                        setDragButtonEffect(
                                                            null
                                                        )
                                                        e.preventDefault()
                                                    }}
                                                    onDragOver={(e) => {
                                                        if (
                                                            dragButtonEffect?.id !==
                                                            exercise.id
                                                        ) {
                                                            setDragButtonEffect(
                                                                exercise
                                                            )
                                                        }
                                                        e.preventDefault()
                                                    }}
                                                    onDrop={() => {
                                                        if (
                                                            dragEvent?.type ===
                                                            'exercise'
                                                        ) {
                                                            console.log({
                                                                buttonOrder,
                                                                dragEvent:
                                                                    dragEvent
                                                                        ?.value
                                                                        ?.order,
                                                            })
                                                            apiUpdate.run({
                                                                exercise: {
                                                                    ...dragEvent.value,
                                                                    order: buttonOrder,
                                                                },
                                                            })
                                                        }
                                                        setDragButtonEffect(
                                                            null
                                                        )
                                                        setDragEvent(null)
                                                    }}
                                                    onClick={() => {
                                                        modal.open({
                                                            order: buttonOrder,
                                                            training_id:
                                                                form.form.id,
                                                            name: 'Novo Exercício',
                                                            measure_type:
                                                                'SERIES',
                                                            execution_plan: {},
                                                        })
                                                    }}
                                                />
                                            )}
                                        </Fragment>
                                    )
                                }
                            )}
                            {(api.response?.exercises || []).length === 0 && (
                                <p>Nenhum exercício cadastrado ainda</p>
                            )}
                        </Grid>
                    </div>
                </>
            )}
        </Page>
    )
}

export default TrainingFormPage
