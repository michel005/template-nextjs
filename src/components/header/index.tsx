'use client'

import style from './index.module.scss'
import Icon from '@/components/icon'
import definitions from '../../../definitions.json'
import Button from '@/components/button'
import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Background from '@/components/background'

const Component = () => {
    const [reduced, setReduced] = useState<boolean>(true)
    const pathname = usePathname()

    return (
        <>
            <header className={style.header}>
                <Icon icon="add_alert" />
                <div className={style.headerText}>
                    <Link href="/">
                        <h1>{definitions.appName}</h1>
                    </Link>
                    <p>{definitions.description}</p>
                </div>
                <div className={style.options}>
                    {definitions.router.map((rout) => {
                        return (
                            <Link
                                key={rout.path}
                                href={rout.path}
                                onClick={() => setReduced(true)}
                                className={clsx(
                                    pathname === rout.path && style.current
                                )}
                            >
                                {rout.label}
                            </Link>
                        )
                    })}
                </div>
                <Button
                    icon="menu"
                    variant="ghost"
                    className={style.reducerButton}
                    onClick={() => {
                        setReduced((x) => !x)
                    }}
                />
            </header>
            <aside className={clsx(style.sidebar, reduced && style.reduced)}>
                {definitions.router.map((rout) => {
                    return (
                        <Link
                            key={rout.path}
                            href={rout.path}
                            onClick={() => setReduced(true)}
                            className={clsx(
                                pathname === rout.path && style.current
                            )}
                        >
                            {rout.label}
                        </Link>
                    )
                })}
            </aside>
            {!reduced && (
                <Background
                    onClick={() => {
                        setReduced(true)
                    }}
                />
            )}
        </>
    )
}

export default Component
