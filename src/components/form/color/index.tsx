'use client'

import style from './index.module.scss'
import { ColorType } from '@/components/form/color/index.type'
import { useRef } from 'react'

const Component = ({ label, value, onChange, disabled }: ColorType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className={style.color}>
            <div
                className={style.input}
                tabIndex={0}
                onClick={() => {
                    inputRef.current?.click()
                }}
            >
                <span>{value || 'Nenhuma cor selecionada'}</span>
                <div className={style.inputContainer}>
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
            </div>
            {label && <label className={style.label}>{label}</label>}
        </div>
    )
}

export default Component
