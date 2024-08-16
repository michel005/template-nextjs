import style from './index.module.scss'
import clsx from 'clsx'
import { GroupType } from '@/components/form/group/index.type'

const Component = ({
    label,
    variant = 'vertical',
    className,
    ...props
}: GroupType) => {
    return (
        <div
            {...props}
            className={clsx(style.group, style[variant], className)}
            data-label={label}
        />
    )
}

export default Component
