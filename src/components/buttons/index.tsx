import style from './index.module.scss'
import clsx from 'clsx'
import { ButtonsType } from '@/components/buttons/index.type'

const Component = ({ className, children, ...props }: ButtonsType) => {
    return (
        <div {...props} className={clsx(style.buttons, className)}>
            <section>{children}</section>
        </div>
    )
}

export default Component
