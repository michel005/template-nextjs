import style from './index.module.scss'
import { BackgroundType } from '@/components/background/index.type'
import clsx from 'clsx'

const Component = ({ className, ...props }: BackgroundType) => {
    return <div {...props} className={clsx(style.background, className)} />
}

export default Component
