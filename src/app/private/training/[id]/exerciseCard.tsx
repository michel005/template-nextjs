'use client'

import { ExerciseType, TrainingType } from '@/types/training.type'
import style from '@/app/private/training/[id]/exerciseCard.module.scss'
import { ExerciseMeasureType } from '@/constants/exerciseMeasureType'
import Menu from '@/components/menu'
import Button from '@/components/button'
import Alert from '@/components/alert'
import { ExerciseDescription } from '@/app/private/training/[id]/exerciseDescription'
import Card from '@/components/card'
import useModal from '@/hook/useModal'
import useMessage from '@/hook/useMessage'
import { useContext, useMemo, useState } from 'react'
import { UserContext } from '@/context/user.context'
import clsx from 'clsx'

export const ExerciseCard = ({
    training,
    exercise,
    index,
    apiRemove,
    apiUpdate,
}: {
    training: TrainingType
    exercise: ExerciseType
    index: number
    apiRemove: any
    apiUpdate: any
}) => {
    const modal = useModal<ExerciseType>('exercise')
    const { dragEvent, setDragEvent } = useContext(UserContext)
    const message = useMessage()
    const [dragButtonEffect, setDragButtonEffect] = useState<boolean>(false)
    const [disableDragDrop, setDisableDragDrop] = useState<boolean>(false)

    const disableForm = useMemo(
        () => training?.status !== 'OPEN',
        [training?.status]
    )

    return (
        <Card
            className={clsx(style.card, dragButtonEffect && style.dragEffect)}
            draggable={!disableDragDrop}
            onDragStart={(e) => {
                if (!disableDragDrop) {
                    setDragEvent({
                        type: 'exercise',
                        value: exercise,
                    })
                }
            }}
            onDragOver={(e) => {
                if (!dragButtonEffect) {
                    setDragButtonEffect(true)
                }
                e.preventDefault()
            }}
            onDragLeave={(e) => {
                setDragButtonEffect(false)
                e.preventDefault()
            }}
            onDrop={(e) => {
                apiUpdate.run({
                    exercise: {
                        ...dragEvent?.value,
                        order:
                            dragEvent?.value.order > (exercise.order || 0)
                                ? (exercise.order || 0) - 1
                                : (exercise.order || 0) + 1,
                    },
                })
                setDragEvent(null)
            }}
        >
            <h4>
                {index + 1}. {exercise.name}
            </h4>
            <label>{ExerciseMeasureType[exercise.measure_type || '']}</label>
            {!disableForm && (
                <Menu
                    id={`exercise_${exercise.id}`}
                    className={style.exerciseMenu}
                    button={(event) => {
                        return (
                            <Button
                                icon="more_vert"
                                variant="link"
                                onClick={() => event()}
                            />
                        )
                    }}
                    onChange={(show) => {
                        setDisableDragDrop(show)
                    }}
                >
                    {(show, setShow) => {
                        return (
                            <>
                                <Button
                                    variant="link"
                                    icon="edit"
                                    onClick={() => {
                                        modal.open(exercise)
                                        setShow(false)
                                    }}
                                >
                                    Alterar
                                </Button>
                                <Button
                                    variant="link"
                                    icon="remove"
                                    onClick={() => {
                                        message.question(
                                            'Deseja realmente excluir esse exercício?',
                                            '',
                                            () => {
                                                apiRemove.run({
                                                    exerciseId: exercise.id,
                                                })
                                                setShow(false)
                                            }
                                        )
                                    }}
                                >
                                    Remover
                                </Button>
                            </>
                        )
                    }}
                </Menu>
            )}
            {exercise.description && (
                <Alert variant="info" icon="warning">
                    {exercise.description}
                </Alert>
            )}
            <ExerciseDescription exercise={exercise} />
        </Card>
    )
}
