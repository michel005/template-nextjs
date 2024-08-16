import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface GroupType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string
    variant?: 'horizontal' | 'vertical'
}
