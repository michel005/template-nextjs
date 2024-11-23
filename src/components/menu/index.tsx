'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import { MenuType } from '@/components/menu/index.type'
import Button from '@/components/button'
import Background from '@/components/background'
import { useEffect, useState } from 'react'

const Component = ({
    className,
    onChange,
    children,
    button,
    ...props
}: MenuType) => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        onChange?.(show)
    }, [show])

    return (
        <div className={clsx(style.menuContainer, className)}>
            {button ? (
                button(() => {
                    setShow((x) => !x)
                })
            ) : (
                <Button
                    variant="ghost"
                    icon="more_horiz"
                    type="button"
                    onClick={() => {
                        setShow((x) => !x)
                    }}
                />
            )}
            <div {...props} className={clsx(style.menu, show && style.show)}>
                {children?.(show, setShow)}
            </div>
            <Background
                className={clsx(style.background, show && style.show)}
                onClick={() => {
                    setShow((x) => !x)
                }}
            />
        </div>
    )
}

export default Component
