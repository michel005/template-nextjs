import style from './index.module.scss'
import clsx from 'clsx'
import { ButtonsType } from '@/components/buttons/index.type'

const Component = ({ className, ...props }: ButtonsType) => {
    return <div {...props} className={clsx(style.skeleton, className)} />
}

export default Component
