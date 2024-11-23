import style from './index.module.scss'
import { CheckboxType } from '@/components/form/checkbox/index.type'
import Icon from '@/components/icon'
import clsx from 'clsx'
import { useMemo, useRef } from 'react'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useForm from '@/hook/useForm/useForm'

const Component = ({ label, field, value, onChange }: CheckboxType) => {
    const ref = useRef<any>(null)
    const { dataForm } = useClosestDataForm(ref)
    const form = useForm(dataForm || 'form')

    const currentValue = useMemo(() => {
        if (!field) {
            return value
        } else {
            return form.formField(field)
        }
    }, [field, form, value])

    return (
        <div className={clsx(style.checkbox, currentValue && style.checked)}>
            <div
                tabIndex={0}
                className={style.box}
                ref={ref}
                onClick={() => {
                    onChange?.(!currentValue)
                }}
            >
                <Icon icon="check" />
            </div>
            {label && (
                <label
                    className={style.label}
                    onClick={() => {
                        onChange?.(!currentValue)
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
