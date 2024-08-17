import style from './index.module.scss'
import { FormType } from '@/components/form/index.type'
import clsx from 'clsx'
import { useEffect } from 'react'

const Component = <T = any,>({
    onSubmit,
    className,
    initialValue,
    loading,
    ...props
}: FormType<T>) => {
    useEffect(() => {
        if (initialValue) {
            for (const field of Object.keys(initialValue)) {
                const input = document.getElementById(field) as any
                if (input) {
                    input.value = (initialValue as any)[field]
                }
            }
        }
    }, [])

    return (
        <form
            {...props}
            onSubmit={(event) => {
                event.preventDefault()
                const formData = new FormData(event.target as any)
                onSubmit(Object.fromEntries(formData.entries()) as T)
            }}
            className={clsx(style.form, className)}
        />
    )
}

export default Component
