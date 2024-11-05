'use client'

import style from './index.module.scss'
import { TextType } from '@/components/form/text/index.type'
import { MaskUtils } from '@/utils/mask.utils'
import { useMemo, useRef } from 'react'
import useForm from '@/hook/useForm/useForm'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useError from '@/hook/useError'
import clsx from 'clsx'

const Component = ({
    label,
    field,
    value = '',
    onChange,
    placeholder = '',
    type = 'text',
    grow = 1,
    mask,
    disabled,
}: TextType) => {
    const ref = useRef<any>(null)
    const { dataForm } = useClosestDataForm(ref)
    const form = useForm(dataForm || 'form')
    const error = useError(dataForm || 'form')

    const currentValue = useMemo(() => {
        if (!field) {
            return value
        } else {
            return form.formField(field)
        }
    }, [field, form, value])

    const defaultPlaceholder = useMemo(() => {
        if (mask === 'cpf') {
            return '999.999.999-99'
        }
        if (mask === 'cnpj') {
            return '99.999.999/9999-99'
        }
        if (mask === 'rg') {
            return '99.999.999-99'
        }
        if (mask === 'cep') {
            return '99999-999'
        }
        if (mask === 'date') {
            return '99/99/9999'
        }
        if (mask === 'time') {
            return '99:99:99'
        }
        return placeholder || label
    }, [mask, placeholder])

    if (type === 'textarea') {
        return (
            <div
                className={clsx(
                    style.text,
                    error.error?.[field || ''] && style.error
                )}
                style={{ flexGrow: grow }}
                title={error.error?.[field || '']}
            >
                <textarea
                    className={style.input}
                    value={currentValue || ''}
                    ref={ref}
                    placeholder={placeholder || label}
                    disabled={disabled}
                    onChange={(e) => {
                        if (field) {
                            form.updateFormField(field, e.target.value)
                        } else {
                            onChange?.(e.target.value)
                        }
                        e.target.style.height = 'auto'
                        if (e.target.value.split('\n').length > 1) {
                            e.target.style.height = `min(calc(${e.target.scrollHeight}px + 14px), 400px)`
                        } else {
                            e.target.style.height = 'var(--input-height)'
                        }
                    }}
                />
                {label && <label className={style.label}>{label}</label>}
            </div>
        )
    }
    return (
        <div
            className={clsx(
                style.text,
                field && error.errorField(field) && style.error
            )}
            style={{ flexGrow: grow }}
            title={error.error?.[field || '']}
        >
            <input
                className={style.input}
                ref={ref}
                type={type === 'password' ? 'password' : type}
                value={currentValue || ''}
                placeholder={defaultPlaceholder}
                disabled={disabled}
                onChange={(e) => {
                    if (field) {
                        if (mask) {
                            form.updateFormField(
                                field,
                                (MaskUtils[mask] as any)(e.target.value)
                            )
                        } else {
                            form.updateFormField(field, e.target.value)
                        }
                    } else {
                        if (mask) {
                            onChange?.((MaskUtils[mask] as any)(e.target.value))
                        } else {
                            onChange?.(e.target.value)
                        }
                    }
                }}
            />
            {label && <label className={style.label}>{label}</label>}
        </div>
    )
}

export default Component
