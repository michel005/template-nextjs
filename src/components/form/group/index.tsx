import style from './index.module.scss'
import clsx from 'clsx'
import { GroupType } from '@/components/form/group/index.type'
import Icon from '@/components/icon'
import useError from '@/hook/useError'
import { useEffect } from 'react'

const Component = ({
    icon,
    label,
    variant = 'vertical',
    className,
    children,
    form,
    ...props
}: GroupType) => {
    const error = useError(form || 'form')

    useEffect(() => {
        error.clear()
    }, [])

    return (
        <span
            {...props}
            data-form={form}
            data-errors={JSON.stringify(error.error)}
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
