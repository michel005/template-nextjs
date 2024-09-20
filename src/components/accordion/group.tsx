import style from './index.module.scss'
import { AccordionGroupType } from '@/components/accordion/group.type'
import clsx from 'clsx'

export const AccordionGroup = ({ className, ...props }: AccordionGroupType) => {
    return <div {...props} className={clsx(style.group, className)} />
}
