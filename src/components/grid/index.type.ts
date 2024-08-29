import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface GridType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    columns?: string
    rows?: string
    span?: number
}
