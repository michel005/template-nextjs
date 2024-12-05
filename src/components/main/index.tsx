'use client'

import style from './index.module.scss'
import Header from '@/components/header'
import React, {
    Fragment,
    ReactNode,
    useContext,
    useLayoutEffect,
    useMemo,
} from 'react'
import { usePathname } from 'next/navigation'
import { StringUtils } from '@/utils/string.utils'
import { Definitions } from '@/constants/definitions'
import { ModalContext } from '@/context/modal.context'
import useMessage from '@/hook/useMessage'
import Footer from '@/components/footer'
import { UserContext } from '@/context/user.context'
import Page from '@/components/page'

const hexToRgbA = (hex: string, opacity: number) => {
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const Component = ({ children }: { children: ReactNode }) => {
    const modalContext = useContext(ModalContext)
    const userContext = useContext(UserContext)
    const message = useMessage()
    const pathname = usePathname()

    const bottomHeader = useMemo(() => {
        const current = Definitions.privateRoutes.find((x) =>
            StringUtils.comparePaths(pathname, x.path)
        )
        return current?.menu || null
    }, [pathname])

    useLayoutEffect(() => {
        const colorSchema =
            userContext.user?.settings?.color_schema || '#3399ff'

        const body = document.getElementsByTagName('body').item(0) as any

        body.style.setProperty('--primary-color', colorSchema)
        body.style.setProperty('--input-border-color-focus', colorSchema)

        body.style.setProperty(
            `--primary-color-05`,
            hexToRgbA(colorSchema, 0.05)
        )
        for (let i = 0.1; i <= 0.9; i = i + 0.1) {
            body.style.setProperty(
                `--primary-color-${Math.round(i * 10)}`,
                hexToRgbA(colorSchema, i)
            )
        }
    }, [pathname, userContext.user])

    const loading = useMemo(
        () => userContext.isLoggedIn && userContext.loading,
        [userContext.isLoggedIn, userContext.loading]
    )

    if (loading) {
        return (
            <div className={style.body}>
                <section>
                    <Page>
                        <h1>Carregando...</h1>
                    </Page>
                </section>
            </div>
        )
    }

    return (
        <div className={style.body}>
            <Header
                pathname={pathname}
                bottom={bottomHeader}
                onExit={() => {
                    message.question('Você realmente quer sair?', '', () => {
                        userContext.logout()
                    })
                }}
            />

            <section>{!loading && children}</section>
            {!userContext.loading && !userContext.isLoggedIn && <Footer />}
            {modalContext.modalList.map((modal) => {
                return (
                    <Fragment key={modal.name}>
                        {Definitions.modal?.[
                            modal.name as keyof typeof Definitions.modal
                        ] || <></>}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Component
