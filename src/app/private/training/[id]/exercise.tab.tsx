import style from './exercise.tab.module.scss'
import Grid from '@/components/grid'
import Button from '@/components/button'
import { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import { ExerciseCard } from '@/app/private/training/[id]/exerciseCard'
import clsx from 'clsx'
import { UserContext } from '@/context/user.context'
import { ExerciseType, TrainingType } from '@/types/training.type'
import { useParams, useRouter } from 'next/navigation'
import useApiService from '@/hook/useApiService'
import useApi from '@/hook/useApi'
import useForm from '@/hook/useForm/useForm'
import useModal from '@/hook/useModal'

const ExerciseTab = ({ id }: { id: string }) => {
    const searchParams = useParams()
    const router = useRouter()
    const apiService = useApiService()
    const api = useApi(
        async () =>
            await apiService.training.getOne({
                id,
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
    const form = useForm<TrainingType>('training')
    const modal = useModal<ExerciseType>('exercise')
    const newTraining = searchParams.id === 'new'

    const { dragEvent, setDragEvent } = useContext(UserContext)
    const [dragButtonEffect, setDragButtonEffect] =
        useState<ExerciseType | null>(null)

    const disableForm = useMemo(
        () => !newTraining && form.form?.status !== 'OPEN',
        [form.form?.status, newTraining]
    )

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

    return (
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
            {api.response?.exercises?.map((exercise, exerciseIndex) => {
                const buttonOrder = (exerciseIndex + 1) * 10 + 5
                return (
                    <Fragment key={exercise.id}>
                        {(!disableForm || exerciseIndex !== 0) && (
                            <div className={style.connectionLine} />
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
                            <div className={style.connectionLine} />
                        )}
                        {!disableForm && (
                            <Button
                                icon="add"
                                className={clsx(
                                    style.addButton,
                                    dragButtonEffect?.id === exercise.id &&
                                        style.dragEffect
                                )}
                                onDragEnter={(e) => {
                                    e.preventDefault()
                                }}
                                onDragLeave={(e) => {
                                    setDragButtonEffect(null)
                                    e.preventDefault()
                                }}
                                onDragOver={(e) => {
                                    if (dragButtonEffect?.id !== exercise.id) {
                                        setDragButtonEffect(exercise)
                                    }
                                    e.preventDefault()
                                }}
                                onDrop={() => {
                                    if (dragEvent?.type === 'exercise') {
                                        console.log({
                                            buttonOrder,
                                            dragEvent: dragEvent?.value?.order,
                                        })
                                        apiUpdate.run({
                                            exercise: {
                                                ...dragEvent.value,
                                                order: buttonOrder,
                                            },
                                        })
                                    }
                                    setDragButtonEffect(null)
                                    setDragEvent(null)
                                }}
                                onClick={() => {
                                    modal.open({
                                        order: buttonOrder,
                                        training_id: form.form.id,
                                        name: 'Novo Exercício',
                                        measure_type: 'SERIES',
                                        execution_plan: {},
                                    })
                                }}
                            />
                        )}
                    </Fragment>
                )
            })}
            {(api.response?.exercises || []).length === 0 && (
                <p>Nenhum exercício cadastrado ainda</p>
            )}
        </Grid>
    )
}

export default ExerciseTab
