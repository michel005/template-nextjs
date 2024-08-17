import style from './index.module.scss'
import { TextType } from '@/components/form/text/index.type'
import { MaskUtils } from '@/utils/mask.utils'

const Component = ({
    id,
    label,
    initialValue,
    placeholder = '',
    type = 'text',
}: TextType) => {
    return (
        <div className={style.text}>
            <input
                className={style.input}
                type={type === 'password' ? type : 'text'}
                id={id}
                name={id}
                defaultValue={initialValue}
                placeholder={placeholder}
                onBlur={(event) => {
                    if (type === 'date') {
                        ;(document.getElementById(id) as any).value =
                            MaskUtils.date(event.target.value)
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
