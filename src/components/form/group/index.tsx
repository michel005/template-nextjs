import style from './index.module.scss'
import clsx from 'clsx'
import { GroupType } from '@/components/form/group/index.type'
import Icon from '@/components/icon'

const Component = ({
    icon,
    label,
    variant = 'vertical',
    className,
    children,
    ...props
}: GroupType) => {
    return (
        <div
            {...props}
            className={clsx(style.group, style[variant], className)}
        >
            <h3>
                {icon && <Icon icon={icon} />} {label}
            </h3>
            <section>{children}</section>
        </div>
    )
}

export default Component
