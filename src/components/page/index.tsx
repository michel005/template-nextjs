import style from './index.module.scss'
import { PageType } from '@/components/page/index.type'
import clsx from 'clsx'
import React from 'react'

const Component = ({ className, children, ...props }: PageType) => {
    return (
        <main {...props} className={clsx(style.page, className)}>
            {children}
        </main>
    )
}

export default Component
