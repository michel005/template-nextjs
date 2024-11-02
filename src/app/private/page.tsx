'use client'

import Page from '@/components/page'
import Skeleton from '@/components/skeleton'
import { Suspense } from 'react'
import style from './page.module.scss'

const HomePage = () => {
    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <Page className={style.homePage}>
                <h1>Bem vindo usuário</h1>
            </Page>
        </Suspense>
    )
}

export default HomePage
