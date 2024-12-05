import { ExerciseType } from '@/types/training.type'
import Text from '@/components/form/text'
import Grid from '@/components/grid'

export const ExecutionPlanTab = ({ exercise }: { exercise: ExerciseType }) => {
    if (exercise?.measure_type === 'SERIES') {
        return (
            <>
                <p>
                    Realize o exercício no máximo de repetições possíveis, tome
                    um tempo para retomar o folego e depois repita o processo
                    pelo número de séries configurado.
                </p>
                <Text
                    label="Número de Séries"
                    field="execution_plan.total_series"
                    type="number"
                />
                <Text
                    label="Tempo de Descanço"
                    field="execution_plan.resting_time"
                    mask="time"
                />
            </>
        )
    }
    if (exercise?.measure_type === 'REPETITIONS') {
        return (
            <>
                <p>
                    Realize o exercício com o número de repetições informadas,
                    tome um tempo para se recompor e tente repetir o número de
                    repetições novamente pelo número de séries configurado.
                </p>
                <Text
                    label="Número de Séries"
                    field="execution_plan.total_series"
                    type="number"
                />
                <Text
                    label="Número de Repetições"
                    field="execution_plan.total_repetitions"
                    type="number"
                />
                <Text
                    label="Tempo de Descanço"
                    field="execution_plan.resting_time"
                    mask="time"
                />
            </>
        )
    }
    if (exercise?.measure_type === 'TIME') {
        return (
            <>
                <p></p>
                <Text
                    label="Tempo de Execução"
                    field="execution_plan.target_time"
                    mask="time"
                />
            </>
        )
    }
    if (exercise?.measure_type === 'DISTANCE') {
        return (
            <>
                <Text
                    label="Tempo de Execução"
                    field="execution_plan.target_time"
                    mask="time"
                />
                <Grid columns="1fr 1fr">
                    <Text
                        label="Distância"
                        field="execution_plan.distance"
                        type="number"
                    />
                    <Text
                        label="Unidade de Medida"
                        field="execution_plan.distance_unit_measure"
                    />
                </Grid>
            </>
        )
    }
    return <></>
}
