'use client'

import style from './index.module.scss'
import { SelectType } from '@/components/form/select/index.type'
import { useRef } from 'react'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useForm from '@/hook/useForm/useForm'
import clsx from 'clsx'
import useError from '@/hook/useError'

const Component = ({
    label,
    field,
    value,
    onChange,
    options,
    disabled,
}: SelectType) => {
    const ref = useRef<any>(null)
    const { dataForm } = useClosestDataForm(ref)
    const form = useForm(dataForm || 'form')
    const error = useError(dataForm || 'form')

    return (
        <div
            className={clsx(
                style.select,
                error.error?.[field || ''] && style.error
            )}
            title={error.error?.[field || '']}
        >
            <select
                ref={ref}
                value={field ? form.form?.[field] || '' : value}
                className={style.input}
                onChange={(e) => {
                    if (field) {
                        form.updateFormField(field, e.target.value)
                    } else {
                        onChange?.(e.target.value)
                    }
                }}
                disabled={disabled}
            >
                <option value={''}></option>
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
            {label && <label className={style.label}>{label}</label>}
            {error.error?.[field || ''] && (
                <label className={style.error}>
                    {error.error?.[field || '']}
                </label>
            )}
        </div>
    )
}

export default Component
