'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Tabs from '@/components/tabs'
import Grid from '@/components/grid'
import Card from '@/components/card'
import Skeleton from '@/components/skeleton'
import { Suspense } from 'react'
import Alert from '@/components/alert'
import Accordion from '@/components/accordion'
import { AccordionGroup } from '@/components/accordion/group'
import Carousel from '@/components/carousel'

const HomePage = () => {
    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <Page className={style.homePage}>
            <h1>Bem vindo ao Template</h1>
                <Carousel
                    steps={[
                        <article key={1} className={style.article}>
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
                <Accordion header={<p>Nunquam experientia gallus.</p>}>
                    <Grid columns="1fr 300px">
                        <article>
                            <h1>Cadunt sed mire ducunt ad audax visus.</h1>
                            <p style={{ flexGrow: 1 }}>
                                With marshmellows drink tabasco. With bok choys
                                drink triple sec. Okra combines greatly with old
                                shrimps. seaweed combines greatly with sour
                                quinoa. Try simmering apple casserole jumbled
                                with gravy. Quinoa combines greatly with bloody
                                peanut butter. Try draining turkey frittata
                                tossed with salsa verde. sausages combines
                                greatly with shredded lettuce. strawberries
                                combines greatly with yellow rice. Strudel
                                combines greatly with small oysters. Spinach
                                combines greatly with springy rice. Try draining
                                chickpeas paste seasoned with gold tequila.
                                cabbage combines greatly with hot squid.
                                Chickpeas combines greatly with sour lentils.
                                melon combines greatly with quartered walnut.
                            </p>
                            <a href="/">Aprenda mais...</a>
                        </article>
                        <img
                            alt="Exemplo de Imagem"
                            src="https://i.pinimg.com/564x/0e/ec/56/0eec564afcfd5b096a5511c47aa938f0.jpg"
                            width="300px"
                        />
                    </Grid>
                </Accordion>
                <AccordionGroup>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <Grid columns="300px 1fr">
                            <img
                                alt="Exemplo de Imagem"
                                src="https://i.pinimg.com/564x/ca/e0/63/cae063337b5ff1f22e6e79a64f44eeaa.jpg"
                                width="300px"
                            />
                            <article>
                                <h1>Cadunt sed mire ducunt ad audax visus.</h1>
                                <p style={{ flexGrow: 1 }}>
                                    Sunt vortexes resuscitabo rusticus, salvus
                                    animalises. Planetas ire, tanquam regius
                                    vigil. Brabeutas sunt liberis de camerarius
                                    torus. a falsis, barcas regius liberi.
                                    Peritus onus rare falleres abactus est. A
                                    falsis, orgia superbus lumen. Ire interdum
                                    ducunt ad audax domus. Albus silva nunquam
                                    consumeres stella est. sunt brabeutaes
                                    acquirere varius, camerarius lixaes. finis
                                    de noster galatae, acquirere mensa! Est
                                    fatalis competition, cesaris. Urbss sunt
                                    solems de fatalis buxum. Aonidess sunt tatas
                                    de gratis hilotae. tatas cantare, tanquam
                                    gratis vigil. Clemens fraticinida superbe
                                    perderes abactor est. secundus plasmators
                                    ducunt ad cedrium. Ortum virtualiter ducunt
                                    ad salvus gallus. Nixus de pius hibrida,
                                    transferre adiurator! Hibrida messiss,
                                    tanquam neuter pes. pars de flavum classis,
                                    convertam bubo! Est alter detrius, cesaris.
                                    hippotoxotas sunt adelphiss de placidus
                                    stella. teres nuptias ducunt ad consilium.
                                    Pes de teres burgus, prensionem rumor!
                                    Diatria ires, tanquam varius fides. Extums
                                    sunt eposs de audax demolitione. Neuter fuga
                                    aegre manifestums boreas est. credere sed
                                    mire ducunt ad fatalis fiscina. talis olla
                                    cito imperiums calceus est. indictio.
                                </p>
                                <a href="/">Aprenda mais...</a>
                            </article>
                        </Grid>
                    </Accordion>
                    <Accordion header={<p>Cur competition studere?</p>}>
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
