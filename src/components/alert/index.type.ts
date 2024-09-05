import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { GoogleIconType } from '@/types/googleIcon.type'

export interface AlertType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon?: GoogleIconType
    variant?: 'info' | 'warning' | 'error' | 'success'
}
