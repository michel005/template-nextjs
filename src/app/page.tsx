'use client'

import style from './page.module.scss'
import Button from '@/components/button'

const HomePage = () => {
    return (
        <main className={style.homePage}>
            <h3>Início</h3>
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
        </main>
    )
}

export default HomePage
