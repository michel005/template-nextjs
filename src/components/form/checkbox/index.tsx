import style from './index.module.scss'
import { CheckboxType } from '@/components/form/checkbox/index.type'
import Icon from '@/components/icon'

const Component = ({
    id,
    label,
    initialValue,
    placeholder = '',
}: CheckboxType) => {
    return (
        <div className={style.checkbox}>
            <input
                className={style.input}
                type="checkbox"
                id={id}
                name={id}
                defaultChecked={initialValue ?? false}
                placeholder={placeholder}
            />
            <div tabIndex={0} className={style.checkbox}>
                <Icon icon="check" />
            </div>
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
