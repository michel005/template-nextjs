'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import { ToggleType } from '@/components/form/toggle/index.type'
import { useRef } from 'react'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useForm from '@/hook/useForm/useForm'

const Component = ({ label, field, value, onChange }: ToggleType) => {
    const ref = useRef<any>(null)
    const { dataForm } = useClosestDataForm(ref)
    const form = useForm(dataForm || 'form')

    return (
        <div className={clsx(style.toggle, value && style.checked)}>
            <div
                tabIndex={0}
                className={style.box}
                onClick={() => {
                    if (field) {
                        form.updateFormField(field, !value)
                    } else {
                        onChange?.(!value)
                    }
                }}
            />
            {label && (
                <label
                    className={style.label}
                    onClick={() => {
                        if (field) {
                            form.updateFormField(field, !value)
                        } else {
                            onChange?.(!value)
                        }
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
