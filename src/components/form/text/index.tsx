'use client'

import style from './index.module.scss'
import { TextType } from '@/components/form/text/index.type'
import { MaskUtils } from '@/utils/mask.utils'
import { useMemo } from 'react'

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

    if (field) {
        if (type === 'textarea') {
            return (
                <div className={style.text} style={{ flexGrow: grow }}>
                    <textarea
                        className={style.input}
                        value={value}
                        placeholder={placeholder || label}
                        disabled={disabled}
                        onChange={(e) => {
                            onChange?.(e.target.value)
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
            <div className={style.text} style={{ flexGrow: grow }}>
                <input
                    className={style.input}
                    type={type === 'password' ? 'password' : type}
                    value={value}
                    placeholder={defaultPlaceholder}
                    disabled={disabled}
                    onChange={(e) => {
                        if (mask) {
                            onChange?.((MaskUtils[mask] as any)(e.target.value))
                        } else {
                            onChange?.(e.target.value)
                        }
                    }}
                />
                {label && <label className={style.label}>{label}</label>}
            </div>
        )
    }

    if (type === 'textarea') {
        return (
            <div className={style.text} style={{ flexGrow: grow }}>
                <textarea
                    className={style.input}
                    value={value}
                    placeholder={placeholder || label}
                    disabled={disabled}
                    onChange={(e) => {
                        onChange?.(e.target.value)
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
        <div className={style.text} style={{ flexGrow: grow }}>
            <input
                className={style.input}
                type={type === 'password' ? 'password' : type}
                value={value}
                placeholder={defaultPlaceholder}
                disabled={disabled}
                onChange={(e) => {
                    if (mask) {
                        onChange?.((MaskUtils[mask] as any)(e.target.value))
                    } else {
                        onChange?.(e.target.value)
                    }
                }}
            />
            {label && <label className={style.label}>{label}</label>}
        </div>
    )
}

export default Component
