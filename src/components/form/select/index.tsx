'use client'

import style from './index.module.scss'
import { SelectType } from '@/components/form/select/index.type'

const Component = ({
    id,
    label,
    initialValue,
    grow = 1,
    options,
}: SelectType) => {
    return (
        <div className={style.select} style={{ flexGrow: grow }}>
            <select
                id={id}
                name={id}
                defaultValue={initialValue}
                className={style.input}
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
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
