import style from './index.module.scss'
import clsx from 'clsx'
import { CardType } from '@/components/card/index.type'

const Component = ({ className, ...props }: CardType) => {
    return <div {...props} className={clsx(style.card, className)} />
}

export default Component
