'use client'

import Page from '@/components/page'
import GeneralTab from '@/app/private/training/[id]/general.tab'
import ExerciseTab from '@/app/private/training/[id]/exercise.tab'
import Card from '@/components/card'
import Grid from '@/components/grid'
import useForm from '@/hook/useForm/useForm'
import { TrainingType } from '@/types/training.type'
import { useMemo } from 'react'
import Text from '@/components/form/text'
import Select from '@/components/form/select'
import { Weekday } from '@/constants/weekday'

const TrainingFormPage = ({ params }: { params: { id: string } }) => {
    const form = useForm<TrainingType>('training')

    const newTraining = useMemo(() => params.id === 'new', [params.id])

    const disableForm = useMemo(
        () => !newTraining && form.form?.status !== 'OPEN',
        [form.form?.status, newTraining]
    )
    return (
        <Page>
            <h2>Dados do Treino</h2>
            <Grid columns="1fr" data-form="training">
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
                    disabled={
                        !['OPEN', 'EXPIRED'].includes(form.form?.status || '')
                    }
                />
            </Grid>
            <h2>Exercícios</h2>
            <ExerciseTab id={params.id} />
        </Page>
    )
}

export default TrainingFormPage
