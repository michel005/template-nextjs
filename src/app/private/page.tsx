'use client'

import Page from '@/components/page'
import style from './page.module.scss'
import { useContext } from 'react'
import { UserContext } from '@/context/user.context'

const HomePage = () => {
    const userContext = useContext(UserContext)

    return (
        <Page className={style.homePage} loading={userContext.loading}>
            <header>
                <p>Bem vindo</p>
                <h1>{userContext.user?.full_name}</h1>
            </header>
        </Page>
    )
}

export default HomePage
