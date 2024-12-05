import { GoogleIconType } from '@/types/googleIcon.type'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type IconType = {
    icon: GoogleIconType
} & Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'children'
>
