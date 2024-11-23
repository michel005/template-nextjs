import style from './index.module.scss'
import { PageType } from '@/components/page/index.type'
import clsx from 'clsx'
import React from 'react'
import Icon from '@/components/icon'

const Component = ({ className, loading, children, ...props }: PageType) => {
    return (
        <main {...props} className={clsx(style.page, className)}>
            {loading && (
                <div className={style.loading}>
                    <Icon icon="sync" />
                </div>
            )}
            {
                children
            }
        </main>
    )
}

export default Component
