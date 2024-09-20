import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface AccordionType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header?: ReactNode
}
