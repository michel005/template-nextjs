'use client'

import style from './index.module.scss'
import { TextType } from '@/components/form/text/index.type'
import { MaskUtils } from '@/utils/mask.utils'
import { FormUtils } from '@/utils/form.utils'

const Component = ({
    id,
    label,
    initialValue,
    placeholder = '',
    type = 'text',
    grow = 1,
    mask,
}: TextType) => {
    if (type === 'textarea') {
        return (
            <div className={style.text} style={{ flexGrow: grow }}>
                <textarea
                    className={style.input}
                    id={id}
                    name={id}
                    defaultValue={initialValue}
                    placeholder={placeholder}
                />
                {label && (
                    <label className={style.label} htmlFor={id}>
                        {label}
                    </label>
                )}
            </div>
        )
    }
    return (
        <div className={style.text} style={{ flexGrow: grow }}>
            <input
                className={style.input}
                type={type === 'password' ? type : 'text'}
                id={id}
                name={id}
                defaultValue={initialValue}
                placeholder={placeholder}
                onBlur={() => {
                    if (mask) {
                        FormUtils.getElement(id).value = (
                            MaskUtils[mask] as any
                        )(FormUtils.getElement(id).value)
                    }
                }}
            />
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
