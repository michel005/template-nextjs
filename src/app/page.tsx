'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Checkbox from '@/components/form/checkbox'

const HomePage = () => {
    return (
        <Page className={style.homePage}>
            <h1>Exemplo</h1>
            <Checkbox label="Aceitar termos de uso" id="accept_user_terms" />
        </Page>
    )
}

export default HomePage
