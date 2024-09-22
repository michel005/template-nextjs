import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface CarouselType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    steps: ReactNode[]
    infinite?: boolean
    automatic?: boolean
    time?: number
}
