'use client'

import style from './page.module.scss'
import Button from '@/components/button'
import Page from '@/components/page'
import Buttons from '@/components/buttons'

const HomePage = () => {
    return (
        <Page className={style.homePage}>
            <Buttons>
                <Button icon="list">Exemplo</Button>
                <Button icon="list" />
                <Button
                    icon="list"
                    onClickAsync={() =>
                        new Promise((x) => {
                            return setTimeout(() => {}, 1000000)
                        })
                    }
                />
                <Button icon="list" disabled={true}>
                    Exemplo
                </Button>
                <Button
                    icon="list"
                    variant="secondary"
                    onClickAsync={() =>
                        new Promise((x) => {
                            return setTimeout(() => {}, 1000000)
                        })
                    }
                >
                    Exemplo
                </Button>
                <Button icon="list" variant="secondary" disabled={true}>
                    Exemplo
                </Button>
                <Button
                    icon="list"
                    variant="ghost"
                    onClickAsync={() =>
                        new Promise((x) => {
                            return setTimeout(() => {}, 1000000)
                        })
                    }
                >
                    Exemplo
                </Button>
                <Button icon="list" variant="ghost" disabled={true}>
                    Exemplo
                </Button>
            </Buttons>
            <h1>Exemplo</h1>
        </Page>
    )
}

export default HomePage
