import style from './index.module.scss'
import { GoogleIconType } from '@/types/googleIcon.type'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconType } from '@/components/icon/index.type'
import clsx from 'clsx'

const Component = ({ icon, className, ...props }: IconType) => {
    return (
        <i {...props} className={clsx(style.icon, className)}>
            {icon}
        </i>
    )
}

export default Component
