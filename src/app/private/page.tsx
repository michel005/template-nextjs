'use client'

import Page from '@/components/page'
import style from './page.module.scss'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'
import { useContext } from 'react'
import { UserContext } from '@/context/user.context'

const HomePage = () => {
    const form = useForm<UserType>('myUser')
    const userContext = useContext(UserContext)

    return (
        <Page className={style.homePage} loading={userContext.loading}>
            <header>
                <p>Bem vindo</p>
                <h1>{form.form?.full_name}</h1>
            </header>
        </Page>
    )
}

export default HomePage
