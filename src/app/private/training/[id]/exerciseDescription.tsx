import {
    DistanceExecutionPlan,
    ExerciseType,
    RepetitionExecutionPlan,
    SeriesExecutionPlan,
    TimeExecutionPlan,
} from '@/types/training.type'
import { TimeUtils } from '@/utils/time.utils'
import { useMemo } from 'react'
import style from './exerciseDescription.module.scss'

export const ExerciseDescription = ({
    exercise,
}: {
    exercise: ExerciseType
}) => {
    const executionPlan = useMemo(() => {
        if (!exercise?.measure_type) {
            return <></>
        }
        if (exercise.measure_type === 'SERIES') {
            const executionPlan = exercise.execution_plan as SeriesExecutionPlan
            let series = `${executionPlan.total_series || '??'} séries`
            if (executionPlan.total_series === 1) {
                series = `${executionPlan.total_series || '??'} série`
            }

            if (executionPlan.resting_time) {
                return (
                    <>
                        <li>
                            Executar <b>{series}</b>.
                        </li>
                        <li>
                            Descansar por{' '}
                            <b>
                                {TimeUtils.literalTime(
                                    executionPlan.resting_time
                                ) || '??'}
                            </b>{' '}
                            a cada série.
                        </li>
                    </>
                )
            } else {
                return (
                    <>
                        <li>
                            Executar <b>{series}</b>.
                        </li>
                    </>
                )
            }
        }
        if (exercise.measure_type === 'REPETITIONS') {
            const executionPlan =
                exercise.execution_plan as RepetitionExecutionPlan
            let series = `${executionPlan.total_series || '??'} séries`
            if (executionPlan.total_series === 1) {
                series = `${executionPlan.total_series || '??'} série`
            }
            let repetitions = `${executionPlan.total_repetitions || '??'} repetições`
            if (executionPlan.total_repetitions === 1) {
                series = `${executionPlan.total_repetitions || '??'} repetição`
            }

            return (
                <>
                    <li>
                        Executar <b>{series}</b>.
                    </li>
                    <li>
                        Executar <b>{repetitions}</b> a cada série.
                    </li>
                    {executionPlan.resting_time && (
                        <li>
                            Descanse por{' '}
                            <b>
                                {TimeUtils.literalTime(
                                    executionPlan.resting_time
                                ) || '??'}
                            </b>{' '}
                            depois de cada série.
                        </li>
                    )}
                </>
            )
        }
        if (exercise.measure_type === 'TIME') {
            const executionPlan = exercise.execution_plan as TimeExecutionPlan

            return (
                <>
                    <li>
                        Executar durante{' '}
                        <b>
                            {executionPlan.target_time
                                ? TimeUtils.literalTime(
                                      executionPlan.target_time
                                  )
                                : '??'}
                        </b>
                        .
                    </li>
                </>
            )
        }
        if (exercise.measure_type === 'DISTANCE') {
            const executionPlan =
                exercise.execution_plan as DistanceExecutionPlan

            return (
                <>
                    <li>
                        Executar durante{' '}
                        <b>
                            {executionPlan.target_time
                                ? TimeUtils.literalTime(
                                      executionPlan.target_time
                                  )
                                : '??'}
                        </b>
                    </li>
                    <li>
                        Percorrer a distância de{' '}
                        <b>
                            {executionPlan.distance || '??'}
                            {executionPlan.distance_unit_measure || 'KM'}
                        </b>
                        .
                    </li>
                </>
            )
        }
        return <></>
    }, [JSON.stringify(exercise)])

    return (
        <ul className={style.exerciseDescription}>
            {executionPlan}
            {exercise?.drops && (
                <li>
                    Ao finalizar, execute mais{' '}
                    <b>{exercise.drops} drop serie(s)</b> fazendo o máximo de
                    repetições possíveis e diminuindo a carga a cada serie.
                </li>
            )}
        </ul>
    )
}
