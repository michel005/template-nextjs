'use client'

import style from './index.module.scss'
import { SelectType } from '@/components/form/select/index.type'
import { useRef } from 'react'

const Component = ({
    label,
    value,
    onChange,
    options,
    disabled,
}: SelectType) => {
    return (
        <div className={style.select}>
            <select
                value={value}
                className={style.input}
                onChange={(e) => {
                    onChange?.(e.target.value)
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
        </div>
    )
}

export default Component
