import style from './index.module.scss'
import { ButtonType } from '@/components/button/index.type'
import Icon from '@/components/icon'
import clsx from 'clsx'

const Component = ({
    icon,
    className,
    variant = 'primary',
    onClick,
    onClickAsync,
    disabled,
    ...props
}: ButtonType) => {
    return (
        <button
            {...props}
            className={clsx(style.button, style[variant], className)}
            onClick={(e) => {
                if (onClickAsync) {
                    const component = e.currentTarget as any
                    component.disabled = true
                    component.setAttribute('data-loading', true)
                    onClickAsync().finally(() => {
                        component.disabled = false
                        component.setAttribute('data-loading', false)
                    })
                } else {
                    onClick?.(e)
                }
            }}
            disabled={disabled}
        >
            {icon && <Icon icon={icon} />}
            {props.children && <span>{props.children}</span>}

            <div className={style.loading}>
                <Icon icon="sync" />
            </div>
        </button>
    )
}

export default Component
