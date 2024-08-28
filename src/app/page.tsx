'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Checkbox from '@/components/form/checkbox'
import Tabs from '@/components/tabs'

const HomePage = () => {
    return (
        <Page className={style.homePage}>
            <h1>Exemplo</h1>
            <Checkbox label="Aceitar termos de uso" id="accept_user_terms" />

            <Tabs
                tabs={[
                    {
                        id: 'example1',
                        label: 'Exemplo 1',
                    },
                    {
                        id: 'example2',
                        label: 'Exemplo 2',
                    },
                    {
                        id: 'example3',
                        label: 'Exemplo 3',
                    },
                    {
                        id: 'example4',
                        label: 'Exemplo 4',
                    },
                    {
                        id: 'example5',
                        label: 'Exemplo 5',
                    },
                ]}
                initialSelected="example1"
            >
                {(current) => {
                    if (current?.id === 'example1') {
                        return (
                            <>
                                <h1>Exemplo 1</h1>
                            </>
                        )
                    }
                    return (
                        <>
                            <h1>{current?.label}</h1>
                        </>
                    )
                }}
            </Tabs>
        </Page>
    )
}

export default HomePage
