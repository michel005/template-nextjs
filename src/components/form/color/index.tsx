'use client'

import style from './index.module.scss'
import { ColorType } from '@/components/form/color/index.type'
import clsx from 'clsx'
import { useMemo, useRef } from 'react'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useForm from '@/hook/useForm/useForm'
import useCopyDeck from '@/hook/useCopyDeck'

const Component = ({ label, field, value, onChange, disabled }: ColorType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { dataForm } = useClosestDataForm(inputRef)
    const form = useForm(dataForm || 'form')
    const copyDeck = useCopyDeck('form', dataForm || 'form')
    const finalLabel = label || copyDeck?.[field || '']

    const currentValue = useMemo(() => {
        if (!field) {
            return value
        } else {
            return form.formField(field)
        }
    }, [field, form, value])

    return (
        <div className={clsx(style.color, !!currentValue && style.haveValue)}>
            <div
                className={style.input}
                tabIndex={0}
                onClick={() => {
                    inputRef.current?.click()
                }}
            >
                <span>{currentValue || 'Nenhuma cor selecionada'}</span>
                <div className={style.inputContainer}>
                    <input
                        className={style.colorInput}
                        type="color"
                        value={currentValue || ''}
                        disabled={disabled}
                        onChange={(e) => {
                            if (field) {
                                form.updateFormField(field, e.target.value)
                            } else {
                                onChange?.(e.target.value)
                            }
                        }}
                        ref={inputRef}
                    />
                </div>
            </div>
            {finalLabel && <label className={style.label}>{finalLabel}</label>}
        </div>
    )
}

export default Component
