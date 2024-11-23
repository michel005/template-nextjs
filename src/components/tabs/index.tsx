'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import { TabsType } from '@/components/tabs/index.type'
import { Suspense, useEffect, useMemo, useState } from 'react'
import Skeleton from '@/components/skeleton'

const Component = ({ tabs, initialSelected, onChangeTab }: TabsType) => {
    const [current, setCurrent] = useState<string | null>(initialSelected)

    const currentTab = useMemo(
        () => tabs.find((x) => x.id === current) || null,
        [current, tabs]
    )

    useEffect(() => {
        setCurrent(initialSelected)
    }, [initialSelected])

    return (
        <div className={style.tabs}>
            <div className={style.tabList}>
                {tabs.map((tab) => {
                    return (
                        <div
                            key={tab.id}
                            className={clsx(
                                style.tab,
                                current === tab.id && style.active
                            )}
                            onClick={() => {
                                if (currentTab?.id !== tab.id) {
                                    onChangeTab?.(currentTab as any, tab)
                                    setCurrent(tab.id)
                                }
                            }}
                        >
                            {tab.label}
                        </div>
                    )
                })}
            </div>
            <div className={style.tabContent}>
                {tabs.map((tab, tabIndex) => {
                    return (
                        <section
                            key={tab.id}
                            className={clsx(
                                current === tab.id && style.currentTab
                            )}
                        >
                            {tab.content}
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Component
