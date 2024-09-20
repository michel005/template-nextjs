'use client'

import style from './index.module.scss'
import { AccordionType } from '@/components/accordion/index.type'
import clsx from 'clsx'
import Button from '@/components/button'
import { useState } from 'react'

const Component = ({
    className,
    children,
    header,
    ...props
}: AccordionType) => {
    const [expand, setExpand] = useState(false)
    return (
        <div
            {...props}
            className={clsx(style.accordion, expand && style.expand, className)}
        >
            <div
                className={style.header}
                onClick={() => {
                    setExpand((x) => !x)
                }}
            >
                {header} <Button icon="keyboard_arrow_down" disabled={true} />
            </div>
            <div className={style.content}>{children}</div>
        </div>
    )
}

export default Component
