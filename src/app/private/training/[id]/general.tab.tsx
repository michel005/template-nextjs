import Grid from '@/components/grid'
import Text from '@/components/form/text'
import Select from '@/components/form/select'
import { Weekday } from '@/constants/weekday'
import { useMemo } from 'react'
import useForm from '@/hook/useForm/useForm'
import { TrainingType } from '@/types/training.type'

const GeneralTab = ({ newTraining }: { newTraining: boolean }) => {
    const form = useForm<TrainingType>('training')

    const disableForm = useMemo(
        () => !newTraining && form.form?.status !== 'OPEN',
        [form.form?.status, newTraining]
    )
    return (
        <Grid columns="1fr" data-form="training">
            <Text label="Nome do Treino" field="name" disabled={disableForm} />
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
                disabled={
                    !['OPEN', 'EXPIRED'].includes(form.form?.status || '')
                }
            />
        </Grid>
    )
}

export default GeneralTab
