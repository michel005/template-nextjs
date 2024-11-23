import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ProgressType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value: number
}
