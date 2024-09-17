import style from './index.module.scss'
import Icon from '@/components/icon'
import clsx from 'clsx'
import Link from 'next/link'
import Background from '@/components/background'
import AppName from '@/components/header/appName'
import { ReactNode } from 'react'
import { Definitions } from '@/constants/definitions'

const Component = ({
    pathname,
    bottom,
    onExit,
}: {
    pathname: string
    bottom: ReactNode | null
    onExit: () => void
}) => {
    const closeSidebar = () => {
        const sidebar = document.getElementById(
            'controlSidebarVisibility'
        ) as any
        sidebar.checked = true
    }

    return (
        <>
            <input
                type="checkbox"
                id="controlSidebarVisibility"
                className={style.checkbox}
                defaultChecked={true}
            />
            <header className={style.header}>
                <div className={style.top}>
                    <center>
                        <AppName />
                        <div className={style.options}>
                            {Definitions.router.map((rout) => {
                                return (
                                    <Link
                                        key={rout.path}
                                        href={rout.path}
                                        className={clsx(
                                            pathname === rout.path &&
                                                style.current
                                        )}
                                    >
                                        {rout.label}
                                    </Link>
                                )
                            })}
                            <label
                                className={style.link}
                                onClick={() => onExit()}
                            >
                                Sair
                            </label>
                        </div>
                        <label
                            className={style.reducerButton}
                            htmlFor="controlSidebarVisibility"
                        >
                            <Icon icon="menu" />
                        </label>
                    </center>
                </div>
            </header>
            {bottom && (
                <div className={style.bottom}>
                    <center>{bottom}</center>
                </div>
            )}
            <aside className={clsx(style.sidebar)}>
                {Definitions.router.map((rout) => {
                    return (
                        <Link
                            key={rout.path}
                            href={rout.path}
                            className={clsx(
                                pathname === rout.path && style.current
                            )}
                            onClick={() => closeSidebar()}
                        >
                            {rout.label}
                        </Link>
                    )
                })}
                <Link
                    href={pathname}
                    onClick={() => {
                        closeSidebar()
                        onExit()
                    }}
                >
                    Sair
                </Link>
            </aside>
            <Background
                className={style.background}
                onClick={() => closeSidebar()}
            />
        </>
    )
}

export default Component
