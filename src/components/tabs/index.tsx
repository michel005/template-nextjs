'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import { TabsType } from '@/components/tabs/index.type'
import { useEffect, useMemo, useState } from 'react'
import Skeleton from '@/components/skeleton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Component = ({
    tabs,
    initialSelected,
    onChangeTab,
    tabName,
}: TabsType) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [current, setCurrent] = useState<string | null>(null)

    const currentTab = useMemo(
        () => tabs.find((x) => x.id === current) || null,
        [current, tabs]
    )

    useEffect(() => {
        setCurrent(initialSelected)
    }, [initialSelected])

    useEffect(() => {
        if (!tabName) {
            return
        }
        if (
            !!searchParams.get(tabName || '') &&
            current !== searchParams.get(tabName || '')
        ) {
            setCurrent(searchParams.get(tabName || ''))
        }
        if (!searchParams.get(tabName || '')) {
            setCurrent(tabs?.[0].id || null)
        }
    }, [searchParams])

    useEffect(() => {
        if (!tabName) {
            setLoading(false)
            return
        }
        if (loading) {
            setCurrent(searchParams.get(tabName || '') || initialSelected)
            setLoading(false)
        } else {
            const params = new URLSearchParams(searchParams)
            if (current) {
                params.set(tabName, current)
            } else {
                params.set(tabName, tabs[0].id)
            }
            router.push(`${pathname}?${params.toString()}`)
        }
    }, [loading, current, tabName])

    if (loading) {
        return <></>
    }

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
                {currentTab && (
                    <section key={currentTab.id} className={style.currentTab}>
                        {currentTab.content}
                    </section>
                )}
            </div>
        </div>
    )
}

export default Component
