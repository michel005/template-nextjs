'use client'

import style from './index.module.scss'
import { ButtonType } from '@/components/button/index.type'
import { useState } from 'react'
import Icon from '@/components/icon'
import clsx from 'clsx'

const Component = ({
    icon,
    className,
    variant = 'primary',
    onClick,
    onClickAsync,
    disabled,
    ...props
}: ButtonType) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <button
            {...props}
            className={clsx(style.button, style[variant], className)}
            onClick={(e) => {
                if (onClickAsync) {
                    setLoading(true)
                    onClickAsync().finally(() => {
                        setLoading(false)
                    })
                } else {
                    onClick?.(e)
                }
            }}
            disabled={loading || disabled}
        >
            {icon && <Icon icon={icon} />}
            {props.children && <span>{props.children}</span>}
            {loading && (
                <div className={style.loading}>
                    <Icon icon="sync" />
                </div>
            )}
        </button>
    )
}

export default Component
