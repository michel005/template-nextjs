'use client'

import Page from '@/components/page'
import style from './page.module.scss'
import useApi from '@/hook/useApi'
import useApiService from '@/hook/useApiService'
import { TrainingStatus } from '@/constants/trainingStatus'
import { TrainingCard } from '@/app/private/training/trainingCard'
import Grid from '@/components/grid'
import Accordion from '@/components/accordion'
import useForm from '@/hook/useForm/useForm'
import Text from '@/components/form/text'
import { useMemo } from 'react'
import Group from '@/components/form/group'
import { Weekday } from '@/constants/weekday'
import { TrainingType } from '@/types/training.type'
import { ExerciseDescription } from '@/app/private/training/[id]/exerciseDescription'
import { DateUtils } from '@/utils/date.utils'
import clsx from 'clsx'
import Button from '@/components/button'
import Buttons from '@/components/buttons'

const TrainingPage = () => {
    const form = useForm('trainingMenu')
    const apiService = useApiService()
    const api = useApi(async () => await apiService.training.getAll(), {
        startRunning: true,
    })

    const viewMode = useMemo(
        () => form.form?.viewMode || 'dashboard',
        [form.form.viewMode]
    )

    const getCustomWeekday = () => {
        const day = new Date().getDay()
        return day === 0 ? 1 : day + 1
    }

    const currentWeekday = getCustomWeekday()

    const trainingsByWeekday = useMemo(() => {
        if (api.status === 'SUCCESS') {
            const result: {
                [key: number]: TrainingType | undefined
            } = {}
            const allWeekdays = Object.keys(Weekday).map((x: string) => ({
                index: parseInt(x),
                name: Weekday[parseInt(x)],
            }))
            for (const weekday of allWeekdays) {
                result[weekday.index] = api.response?.find(
                    (x) =>
                        parseInt(x.weekday?.toString() || '') ===
                            weekday.index && x.status === 'OPEN'
                )
            }
            return result
        } else {
            return {}
        }
    }, [api.status])

    if (viewMode === 'calendar') {
        return (
            <Page loading={api.status === 'LOADING'}>
                <h1>Treinos da Semana</h1>
                <p>
                    Aqui você acompanha qual seu treino da semana, e executa
                    eles de forma rápida e fácil.
                </p>
                {Object.keys(Weekday).map((weekday) => {
                    const current = trainingsByWeekday?.[parseInt(weekday)]

                    if (!current) {
                        return (
                            <Group
                                key={weekday}
                                className={clsx(
                                    style.card,
                                    currentWeekday === parseInt(weekday) &&
                                        style.currentWeekday
                                )}
                            >
                                <b>{Weekday[parseInt(weekday)]}</b>
                                <p className={style.noTrainingDefined}>
                                    Sem treino definido
                                </p>
                            </Group>
                        )
                    }

                    return (
                        <Group
                            key={weekday}
                            className={clsx(
                                style.card,
                                currentWeekday === parseInt(weekday) &&
                                    style.currentWeekday
                            )}
                        >
                            <b>{Weekday[parseInt(weekday)]}</b>
                            {current?.name && <h2>{current?.name}</h2>}
                            <Grid columns="1fr auto">
                                {(current?.exercises || []).length > 0 ? (
                                    <ol>
                                        {current?.exercises?.map((exercise) => {
                                            return (
                                                <li key={exercise.id}>
                                                    {exercise.name}
                                                    {exercise.description && (
                                                        <small>
                                                            {
                                                                exercise.description
                                                            }
                                                        </small>
                                                    )}
                                                    <ExerciseDescription
                                                        exercise={exercise}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ol>
                                ) : (
                                    <div />
                                )}
                                <Buttons>
                                    <Button variant="secondary" icon="history">
                                        Histórico
                                    </Button>
                                    {currentWeekday === parseInt(weekday) && (
                                        <Button
                                            icon="play_arrow"
                                            disabled={
                                                (current?.exercises || [])
                                                    .length === 0
                                            }
                                        >
                                            Executar Treino
                                        </Button>
                                    )}
                                </Buttons>
                            </Grid>
                            {current?.expiration_date && (
                                <div className={style.expirationDate}>
                                    {current?.expiration_date}
                                    <b>
                                        {DateUtils.daysBetween(
                                            current?.expiration_date,
                                            DateUtils.dateToString(new Date())
                                        )}{' '}
                                        dia(s) restante(s)
                                    </b>
                                </div>
                            )}
                        </Group>
                    )
                })}
            </Page>
        )
    }

    if (form.form?.filter) {
        return (
            <Page
                className={style.trainingPage}
                loading={api.status === 'LOADING'}
            >
                <Grid
                    data-form="trainingMenu"
                    columns="1fr 1fr"
                    className={style.header}
                >
                    <h1>Treinos</h1>
                    <Text field="filter" />
                </Grid>
                <Grid columns="1fr 1fr 1fr" className={style.trainingList}>
                    {api?.response
                        ?.filter((x) =>
                            JSON.stringify(x)
                                .toUpperCase()
                                .includes(form.form?.filter?.toUpperCase())
                        )
                        ?.map((training) => (
                            <TrainingCard
                                training={training}
                                key={training.id}
                            />
                        ))}
                </Grid>
            </Page>
        )
    }

    return (
        <Page className={style.trainingPage} loading={api.status === 'LOADING'}>
            <Grid
                data-form="trainingMenu"
                columns="1fr 1fr"
                className={style.header}
            >
                <h1>Todos os Treinos</h1>
                <Text field="filter" />
            </Grid>
            {Object.keys(TrainingStatus).map((status) => {
                const statusTrainings = api?.response?.filter(
                    (training) => training.status === status
                )
                return (
                    <Accordion
                        header={
                            <p>
                                {TrainingStatus[status]}{' '}
                                <span className={style.bag}>
                                    {statusTrainings?.length || 0}
                                </span>
                            </p>
                        }
                        className={style.group}
                        key={status}
                        initiallyExpanded={status === 'OPEN'}
                    >
                        <Grid
                            columns="1fr 1fr 1fr"
                            className={style.trainingList}
                        >
                            {statusTrainings?.length === 0 && (
                                <p>Nenhum treino encontrado</p>
                            )}
                            {statusTrainings?.map((training) => {
                                return (
                                    <TrainingCard
                                        training={training}
                                        key={training.id}
                                    />
                                )
                            })}
                        </Grid>
                    </Accordion>
                )
            })}
        </Page>
    )
}

export default TrainingPage
