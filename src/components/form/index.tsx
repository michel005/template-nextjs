'use client'

import style from './index.module.scss'
import { FormType } from '@/components/form/index.type'
import clsx from 'clsx'
import { useEffect, useLayoutEffect, useState } from 'react'

const Component = <T = any,>({
    onSubmit,
    className,
    initialValue,
    loading,
    ...props
}: FormType<T>) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (initialValue) {
            setLoaded(false)
            for (const field of Object.keys(initialValue)) {
                const input = document.getElementById(field) as any
                input.value = (initialValue as any)[field]
            }
            setLoaded(true)
        }
    }, [initialValue])

    return (
        <form
            {...props}
            onSubmit={(event) => {
                event.preventDefault()
                const formData = new FormData(event.target as any)
                onSubmit(Object.fromEntries(formData.entries()) as T)
            }}
            className={clsx(
                style.form,
                (loading ?? !loaded) && style.loading,
                className
            )}
        />
    )
}

export default Component
