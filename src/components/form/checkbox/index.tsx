import style from './index.module.scss'
import { CheckboxType } from '@/components/form/checkbox/index.type'
import Icon from '@/components/icon'
import clsx from 'clsx'

const Component = ({ label, value, onChange }: CheckboxType) => {
    return (
        <div className={clsx(style.checkbox, value && style.checked)}>
            <div
                tabIndex={0}
                className={style.box}
                onClick={() => {
                    onChange?.(!value)
                }}
            >
                <Icon icon="check" />
            </div>
            {label && (
                <label
                    className={style.label}
                    onClick={() => {
                        onChange?.(!value)
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default Component
