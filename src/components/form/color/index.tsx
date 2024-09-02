'use client'

import style from './index.module.scss'
import { ColorType } from '@/components/form/color/index.type'
import { CSSProperties, useRef } from 'react'

const Component = ({ label, value, onChange, disabled }: ColorType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className={style.color}>
            <div className={style.input} tabIndex={0}>
                <span>{value || 'Nenhuma cor selecionada'}</span>
                <div
                    className={style.colorPreview}
                    style={
                        {
                            '--color': value || '#ccc',
                        } as CSSProperties
                    }
                    onClick={() => {
                        inputRef.current?.click()
                    }}
                />
                <input
                    className={style.colorInput}
                    type="color"
                    value={value || ''}
                    disabled={disabled}
                    onChange={(e) => {
                        onChange?.(e.target.value)
                    }}
                    ref={inputRef}
                />
            </div>
            {label && (
                <label
                    className={style.label}
                    onClick={() => {
                        inputRef.current?.click()
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
