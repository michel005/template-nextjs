'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import { TabsType } from '@/components/tabs/index.type'
import { useEffect, useMemo, useState } from 'react'

const Component = ({
    tabs,
    initialSelected,
    children,
    onChangeTab,
    onLoadingTab,
}: TabsType) => {
    const [current, setCurrent] = useState<string | null>(initialSelected)

    const currentTab = useMemo(
        () => tabs.find((x) => x.id === current) || null,
        [current, tabs]
    )

    useEffect(() => {
        if (currentTab) {
            onLoadingTab?.(currentTab)
        }
    }, [])

    return (
        <div className={style.tabs}>
            <div className={style.tabList}>
                {tabs.map((tab) => {
                    return (
                        <label
                            key={tab.id}
                            className={clsx(
                                style.tab,
                                current === tab.id && style.active
                            )}
                            onClick={() => {
                                if (currentTab?.id !== tab.id) {
                                    onChangeTab?.(currentTab as any, tab)
                                    setCurrent(tab.id)
                                    onLoadingTab?.(tab)
                                }
                            }}
                        >
                            {tab.label}
                        </label>
                    )
                })}
            </div>
            <section key={currentTab?.id}>
                {current && currentTab && children(currentTab)}
            </section>
        </div>
    )
}

export default Component
