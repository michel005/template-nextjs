'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Tabs from '@/components/tabs'
import Grid from '@/components/grid'
import Card from '@/components/card'
import Skeleton from '@/components/skeleton'
import { CSSProperties, Suspense } from 'react'
import Alert from '@/components/alert'
import Accordion from '@/components/accordion'
import { AccordionGroup } from '@/components/accordion/group'
import Carousel from '@/components/carousel'
import Button from '@/components/button'

const HomePage = () => {
    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <Page className={style.homePage}>
                <Carousel
                    steps={[
                        <article key={1} className={style.article}>
                            <h1>Bem vindo ao Template</h1>
                            <p>
                                Aqui você encontra exemplos para a utilização de
                                vários componentes emum novo projeto.
                            </p>
                            <Grid columns="1fr 1fr 1fr" className={style.cards}>
                                <Card>
                                    <h3>Informação 1</h3>
                                    <p>
                                        Exemplo de texto de um cartão que vai
                                        ser exibido no dashboard do site.
                                    </p>
                                </Card>
                                <Card>
                                    <h3>Informação 2</h3>
                                    <p>
                                        Exemplo de texto de um cartão que vai
                                        ser exibido no dashboard do site.
                                    </p>
                                </Card>
                                <Card>
                                    <h3>Informação 3</h3>
                                    <p>
                                        Exemplo de texto de um cartão que vai
                                        ser exibido no dashboard do site.
                                    </p>
                                </Card>
                            </Grid>
                        </article>,
                        <img
                            key={2}
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                            alt=""
                        />,
                        <img
                            key={3}
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                            alt=""
                        />,
                        <img
                            key={4}
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                            alt=""
                        />,
                        <img
                            key={5}
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                            alt=""
                        />,
                    ]}
                />
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
                <Alert icon="notification_important" variant="error">
                    <p>
                        Você possui 8 alertas pendêntes. Deseja{' '}
                        <a href="">resolver</a> isso agora?
                    </p>
                </Alert>
                <Accordion header={<p>Exemplo de Accordion</p>}>
                    <p>Exemplo de Texto</p>
                </Accordion>
                <AccordionGroup>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <Grid columns="200px 1fr">
                            <img
                                alt="Exemplo de Imagem"
                                src="https://i.pinimg.com/564x/ca/e0/63/cae063337b5ff1f22e6e79a64f44eeaa.jpg"
                                width="200px"
                            />
                            <article>
                                <h1>Esse é um exemplo de accordion</h1>
                                <p>
                                    Aqui você pode expressar qualquer idéia e
                                    apenas expandir essa sessão quando for
                                    realmente necessário.
                                </p>
                                <Button icon="book">Aprenda mais...</Button>
                            </article>
                        </Grid>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>Exemplo de Texto</p>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>Exemplo de Texto</p>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>Exemplo de Texto</p>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>Exemplo de Texto</p>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>Exemplo de Texto</p>
                    </Accordion>
                </AccordionGroup>
            </Page>
        </Suspense>
    )
}

export default HomePage
