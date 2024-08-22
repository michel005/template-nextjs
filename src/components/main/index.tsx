'use client'

import style from './index.module.scss'
import Header from '@/components/header'
import React, { Fragment, ReactNode, useContext, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { StringUtils } from '@/utils/string.utils'
import { Definitions } from '@/constants/definitions'
import { ModalContext } from '@/context/modal.context'
import useMessage from '@/hook/useMessage'

const Component = ({ children }: { children: ReactNode }) => {
    const { modalList } = useContext(ModalContext)
    const message = useMessage()
    const pathname = usePathname()

    const bottomHeader = useMemo(() => {
        const current = Definitions.router.find((x) =>
            StringUtils.comparePaths(pathname, x.path)
        )
        return current?.menu || null
    }, [pathname])

    return (
        <body className={style.body}>
            <Header
                pathname={pathname}
                bottom={bottomHeader}
                onExit={() => {
                    message.question('Você realmente quer sair?', '', () => {})
                }}
            />
            {children}
            {modalList.map((modal) => {
                return (
                    <Fragment key={modal.name}>
                        {Definitions.modal?.[
                            modal.name as keyof typeof Definitions.modal
                        ] || <></>}
                    </Fragment>
                )
            })}
        </body>
    )
}

export default Component
