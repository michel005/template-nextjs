import style from './index.module.scss'
import clsx from 'clsx'
import { AlertType } from '@/components/alert/index.type'
import Icon from '@/components/icon'

const Component = ({
    className,
    variant = 'info',
    icon,
    children,
    ...props
}: AlertType) => {
    return (
        <div
            {...props}
            className={clsx(style.alert, style[variant as any], className)}
        >
            {icon && <Icon icon={icon} />}
            <div>{children}</div>
        </div>
    )
}

export default Component
