import style from './index.module.scss'
import { PageType } from '@/components/page/index.type'
import clsx from 'clsx'

const Component = ({ className, ...props }: PageType) => {
    return <main {...props} className={clsx(style.page, className)}></main>
}

export default Component
