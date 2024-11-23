import style from './index.module.scss'
import clsx from 'clsx'
import { ProgressType } from '@/components/progress/index.type'
import { CSSProperties } from 'react'

const Component = ({
    className,
    style: style2,
    value,
    children,
    ...props
}: ProgressType) => {
    return (
        <div
            {...props}
            style={{ '--value': Math.min(value, 1), ...style } as CSSProperties}
            className={clsx(
                style.progress,
                value >= 1 && style.completed,
                className
            )}
        >
            <span>{children}</span>
        </div>
    )
}

export default Component
