import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { GoogleIconType } from '@/types/googleIcon.type'

export interface GroupType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon?: GoogleIconType
    label?: string
    variant?: 'horizontal' | 'vertical'
}
