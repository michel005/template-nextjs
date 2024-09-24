import style from './index.module.scss'
import clsx from 'clsx'
import { ToggleType } from '@/components/form/toggle/index.type'

const Component = ({ label, value, onChange }: ToggleType) => {
    return (
        <div className={clsx(style.toggle, value && style.checked)}>
            <div
                tabIndex={0}
                className={style.box}
                onClick={() => {
                    onChange?.(!value)
                }}
            />
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
