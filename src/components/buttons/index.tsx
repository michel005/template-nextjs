import style from './index.module.scss'
import clsx from 'clsx'
import { ButtonsType } from '@/components/buttons/index.type'

const Component = ({
    className,
    noSpace = false,
    children,
    ...props
}: ButtonsType) => {
    return (
        <div
            {...props}
            className={clsx(style.buttons, noSpace && style.noSpace, className)}
        >
            <section>{children}</section>
        </div>
    )
}

export default Component
