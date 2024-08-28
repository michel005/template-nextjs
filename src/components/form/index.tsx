'use client'

import style from './index.module.scss'
import { FormType } from '@/components/form/index.type'
import clsx from 'clsx'
import { useLayoutEffect } from 'react'
import { FormUtils } from '@/utils/form.utils'

const Component = <T = any,>({
    className,
    loading,
    id = 'form',
    initialValues,
    ...props
}: FormType<T>) => {
    useLayoutEffect(() => {
        FormUtils.initialValues(initialValues)
    }, [])

    return <form {...props} id={id} className={clsx(style.form, className)} />
}

export default Component
