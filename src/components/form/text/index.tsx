import style from './index.module.scss'
import { TextType } from '@/components/form/text/index.type'

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
