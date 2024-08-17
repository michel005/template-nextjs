import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface MenuType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string
    button?: (alternate: () => void) => ReactNode
}
