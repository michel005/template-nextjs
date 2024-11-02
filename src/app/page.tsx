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
import Image from 'next/image'

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
                                vários componentes em um novo projeto.
                            </p>
                            <Grid columns="1fr 1fr 1fr">
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
                            <p>
                                Voluptate Lorem eiusmod aliqua esse cillum
                                eiusmod occaecat elit ea ex do commodo. Et irure
                                ullamco eu aliquip consequat. Velit est aute
                                reprehenderit adipisicing id occaecat anim et
                                excepteur fugiat.
                            </p>
                        </article>,
                        <Image
                            key={2}
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
                            alt=""
                            width={0}
                            height={400}
                        />,
                    ]}
                />
                <Tabs
                    tabs={[
                        {
                            id: 'example1',
                            label: 'Exemplo 1',
                            content: (
                                <>
                                    <p>
                                        Ea aliquip laborum non proident tempor
                                        officia in Lorem. In occaecat tempor
                                        aute cupidatat Lorem adipisicing nostrud
                                        Lorem adipisicing ipsum pariatur enim.
                                        Duis do culpa adipisicing nostrud
                                        proident eu adipisicing est tempor
                                        eiusmod minim laboris enim minim. Culpa
                                        eu quis dolor eiusmod laboris aliqua
                                        incididunt id consequat exercitation.
                                    </p>
                                    <p>
                                        Aliquip magna reprehenderit nisi nulla.
                                        Ad magna veniam do tempor cillum
                                        incididunt culpa nulla duis pariatur
                                        aliquip. Eu sunt sint do duis mollit eu
                                        velit nisi est enim commodo ut nulla
                                        veniam. Minim reprehenderit ea ipsum
                                        eiusmod. Sint ea sunt quis sint nulla do
                                        enim quis do esse cillum ex officia
                                        nisi.
                                    </p>
                                </>
                            ),
                        },
                        {
                            id: 'example2',
                            label: 'Exemplo 2',
                            content: (
                                <>
                                    <p>
                                        Enim aute aliqua veniam labore eiusmod
                                        id velit proident. Voluptate excepteur
                                        laboris ullamco magna laborum aliquip
                                        nostrud aliqua proident veniam elit
                                        aliquip. Consequat minim reprehenderit
                                        nisi est amet consectetur cillum aliqua
                                        aute ullamco laboris. Dolor amet
                                        consectetur duis ad laborum est. Nisi
                                        eiusmod anim cillum esse cupidatat nisi
                                        do labore occaecat et sint pariatur
                                        Lorem consectetur. Excepteur cupidatat
                                        id eiusmod nostrud.
                                    </p>
                                    <p>
                                        Do voluptate ex non sunt veniam anim
                                        commodo consequat. Consectetur do in
                                        excepteur eu ipsum quis. Qui nulla
                                        aliqua veniam voluptate sint ullamco
                                        amet aliqua eiusmod quis magna minim
                                        sunt ipsum. Ad quis irure ad laboris
                                        occaecat eu aute nostrud aute quis
                                        incididunt nostrud ullamco. Incididunt
                                        laborum nulla esse in laboris aute
                                        exercitation. Et ullamco mollit dolor
                                        officia et sunt laborum consectetur
                                        anim.
                                    </p>
                                    <p>
                                        Officia ipsum elit consequat ad mollit
                                        occaecat occaecat fugiat exercitation.
                                        Voluptate voluptate ullamco dolore
                                        mollit ipsum. Cillum laborum non ipsum
                                        mollit.
                                    </p>
                                </>
                            ),
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
                <Alert icon="notification_important" variant="warning">
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
                        <p>
                            Et sit cillum sint in et incididunt minim ut culpa
                            non velit consectetur sit. Ut tempor culpa veniam
                            cupidatat laboris tempor. Sint cillum amet commodo
                            culpa laboris nostrud ex excepteur commodo ea ex
                            aliquip dolore. Aute sint officia nisi eu mollit
                            nulla quis occaecat aliqua. Consequat anim fugiat
                            irure amet velit laborum commodo laboris
                            reprehenderit eiusmod in elit. Tempor est officia ex
                            excepteur duis ullamco qui consectetur culpa nulla.
                            Dolore proident excepteur amet aliqua dolore irure
                            magna. Cillum ipsum esse pariatur laborum labore qui
                            commodo.
                        </p>
                        <p>
                            Irure in Lorem ullamco do do proident labore aliqua
                            veniam et cupidatat sit laborum. Culpa esse eu nulla
                            amet Lorem esse incididunt nisi veniam consectetur
                            ad. Ad officia enim ipsum laboris eiusmod. Sit aute
                            amet veniam duis nostrud esse sunt Lorem ex anim
                            Lorem. Eiusmod enim aliqua minim nostrud. Commodo do
                            et tempor exercitation Lorem magna fugiat excepteur.
                            Officia reprehenderit ad eu ut duis cupidatat ex
                            minim reprehenderit quis veniam. Aliquip veniam id
                            ex et adipisicing aliquip laborum ut consectetur do
                            qui tempor id enim.
                        </p>
                        <p>
                            Cillum labore ea culpa magna ad aliquip culpa amet
                            minim magna reprehenderit. Aliqua tempor et ut esse
                            occaecat pariatur proident id culpa. Quis esse
                            cupidatat cillum fugiat occaecat aliquip nisi
                            pariatur nostrud magna pariatur occaecat incididunt
                            elit. Enim officia culpa aliquip occaecat anim
                            eiusmod sunt. Officia dolor mollit aliquip occaecat
                            duis aliquip officia sunt ea quis et minim minim
                            culpa. Proident aute laborum incididunt qui proident
                            do magna. Reprehenderit officia amet excepteur
                            cillum Lorem fugiat occaecat duis qui deserunt
                            proident laboris dolore. Duis fugiat exercitation
                            aliqua culpa.
                        </p>
                    </Accordion>
                    <Accordion
                        header={
                            <p>
                                Pariatur ullamco eiusmod in officia cupidatat
                                cupidatat ea aute.
                            </p>
                        }
                    >
                        <p>
                            Ea nulla minim in magna. Pariatur exercitation
                            proident ullamco ad duis ea excepteur labore sint
                            pariatur ipsum. Voluptate reprehenderit pariatur
                            Lorem pariatur laboris ullamco laboris laborum sint
                            cillum. Voluptate nulla velit Lorem exercitation
                            dolore in. Do consequat ut veniam excepteur. Irure
                            ad non id occaecat ipsum ex nisi in id occaecat
                            nostrud labore minim veniam. Officia magna amet
                            culpa velit. Adipisicing sit dolore velit
                            consectetur non tempor laboris sunt voluptate eu
                            tempor.
                        </p>
                        <p>
                            Aliqua eiusmod est mollit minim voluptate ad
                            consequat aliquip aute culpa. Non id nostrud
                            cupidatat magna amet enim proident ea quis veniam
                            reprehenderit incididunt mollit sit. Esse tempor
                            tempor consectetur cillum. Aliqua ad ipsum dolor
                            culpa ullamco Lorem cillum anim occaecat ipsum.
                            Dolore velit officia fugiat labore dolor dolore
                            magna do est laboris duis eu occaecat.
                        </p>
                        <p>
                            Aliquip sunt labore Lorem laboris occaecat non.
                            Exercitation Lorem est commodo exercitation anim
                            culpa anim eiusmod sit sunt do sit do exercitation.
                            Est ad culpa commodo commodo anim. Quis et velit
                            incididunt tempor sint eiusmod irure esse eiusmod.
                            Deserunt dolor ipsum elit est deserunt sint esse
                            quis. Minim esse labore anim sit. Velit aliqua ipsum
                            dolor dolor nisi irure occaecat sint. Dolore
                            voluptate esse aute eiusmod sit aliqua qui.
                        </p>
                        <p>
                            Ullamco excepteur occaecat esse id mollit nostrud
                            deserunt ea adipisicing nostrud cillum voluptate.
                            Velit incididunt voluptate enim incididunt voluptate
                            enim veniam. Magna eu do duis velit deserunt
                            aliquip.
                        </p>
                        <p>
                            Culpa sit consectetur dolore Lorem duis labore.
                            Veniam voluptate adipisicing incididunt ipsum nisi.
                            Aliqua est eiusmod nisi veniam do do veniam.
                            Excepteur irure consectetur est nisi dolore ullamco
                            cupidatat nulla ullamco. Nulla in cillum pariatur
                            dolore deserunt nulla. Ullamco pariatur cillum
                            labore duis reprehenderit ut qui proident.
                        </p>
                    </Accordion>
                    <Accordion
                        header={
                            <p>
                                Quis minim ex id nulla cupidatat ut duis ut
                                laboris.
                            </p>
                        }
                    >
                        <p>
                            Qui fugiat ipsum anim fugiat ullamco velit. Ex culpa
                            irure minim nulla ullamco ea anim laborum commodo
                            sint nisi veniam minim ullamco. Dolor aute velit
                            exercitation enim ex aliquip aliquip veniam veniam
                            amet ea culpa. Do tempor ipsum voluptate id enim.
                            Voluptate sunt enim laborum qui aute amet in
                            proident laboris excepteur ea ea esse. Culpa commodo
                            irure mollit commodo consequat nostrud voluptate est
                            quis. Mollit ullamco ullamco minim mollit fugiat
                            aliquip ad culpa reprehenderit officia sit nostrud
                            commodo.
                        </p>
                    </Accordion>
                    <Accordion
                        header={
                            <p>
                                Officia fugiat quis magna sint reprehenderit
                                consequat et amet consectetur aliquip qui.
                            </p>
                        }
                    >
                        <p>
                            Irure quis mollit laboris officia Lorem. Mollit
                            incididunt duis dolor consectetur incididunt irure
                            veniam. Aliqua duis excepteur labore est ipsum quis
                            mollit eiusmod. Voluptate elit in consequat officia
                            incididunt deserunt dolor amet. Enim mollit amet
                            excepteur ut amet laboris officia dolor cupidatat
                            aliquip laborum quis labore id. Do reprehenderit
                            adipisicing eu consectetur fugiat non reprehenderit
                            consectetur. Veniam velit mollit officia do ea
                            officia dolor minim anim excepteur eu in. Quis elit
                            consequat amet qui aliqua irure cupidatat ex est
                            ullamco Lorem.
                        </p>
                        <p>
                            Quis cupidatat ea irure incididunt dolor veniam duis
                            id enim do. In duis aute amet id ipsum aliquip
                            dolor. Laborum adipisicing cillum enim nulla labore
                            officia deserunt sint culpa elit consectetur aliquip
                            esse. Do labore duis nulla exercitation tempor
                            ullamco dolor fugiat labore. Nostrud nulla
                            consectetur <a href="#">adipisicing incididunt</a>{' '}
                            culpa velit nisi officia. Non quis aute veniam Lorem
                            culpa occaecat elit ipsum Lorem ea aliquip ut
                            reprehenderit. Reprehenderit consectetur duis non
                            fugiat cupidatat mollit ullamco aute excepteur.
                            Mollit amet exercitation eiusmod commodo magna.
                        </p>
                    </Accordion>
                    <Accordion header={<p>Exemplo de Accordion</p>}>
                        <p>
                            Aliqua labore magna magna qui pariatur officia
                            cillum esse adipisicing et. Exercitation nulla
                            laborum minim nisi. Mollit velit laboris cupidatat
                            officia irure deserunt anim deserunt duis qui ut. Ea
                            ullamco non mollit eu. Excepteur commodo ullamco
                            labore nulla ullamco.
                        </p>
                    </Accordion>
                </AccordionGroup>
            </Page>
        </Suspense>
    )
}

export default HomePage
