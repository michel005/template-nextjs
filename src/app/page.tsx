'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Tabs from '@/components/tabs'
import Grid from '@/components/grid'
import Card from '@/components/card'

const HomePage = () => {
    return (
        <Page className={style.homePage}>
            <h1>Exemplo</h1>
            <Tabs
                tabs={[
                    {
                        id: 'example1',
                        label: 'Exemplo 1',
                        content: <></>,
                    },
                    {
                        id: 'example2',
                        label: 'Exemplo 2',
                        content: <></>,
                    },
                    {
                        id: 'example3',
                        label: 'Exemplo 3',
                        content: <></>,
                    },
                    {
                        id: 'example4',
                        label: 'Exemplo 4',
                        content: <></>,
                    },
                    {
                        id: 'example5',
                        label: 'Exemplo 5',
                        content: <></>,
                    },
                ]}
                initialSelected="example1"
            />
            <Grid columns="1fr 1fr 1fr" className={style.cards}>
                <Card>
                    <h3>Informação 1</h3>
                    <p>
                        Exemplo de texto de um cartão que vai ser exibido no
                        dashboard do site.
                    </p>
                </Card>
                <Card>
                    <h3>Informação 2</h3>
                    <p>
                        Exemplo de texto de um cartão que vai ser exibido no
                        dashboard do site.
                    </p>
                </Card>
                <Card>
                    <h3>Informação 3</h3>
                    <p>
                        Exemplo de texto de um cartão que vai ser exibido no
                        dashboard do site.
                    </p>
                </Card>
            </Grid>
        </Page>
    )
}

export default HomePage
