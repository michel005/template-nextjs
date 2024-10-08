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
        <span
            {...props}
            className={clsx(style.group, style[variant], className)}
        >
            {label && (
                <h3>
                    {icon && <Icon icon={icon} />} {label}
                </h3>
            )}
            <section>{children}</section>
        </span>
    )
}

export default Component
