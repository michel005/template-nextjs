'use client'

import Page from '@/components/page'
import style from './page.module.scss'
import useApi from '@/hook/useApi'
import useApiService from '@/hook/useApiService'
import { TrainingStatus } from '@/constants/trainingStatus'
import { TrainingCard } from '@/app/private/training/trainingCard'
import Grid from '@/components/grid'
import Accordion from '@/components/accordion'

const TrainingPage = () => {
    const apiService = useApiService()
    const api = useApi(async () => await apiService.training.getAll(), {
        startRunning: true,
    })

    return (
        <Page className={style.trainingPage} loading={api.status === 'LOADING'}>
            <h1>Treinos</h1>
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
