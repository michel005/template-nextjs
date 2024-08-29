import { ReactNode } from 'react'

export interface SelectType {
    label: string
    id: string
    initialValue?: string
    placeholder?: string
    grow?: number
    options: {
        key: string
        label: ReactNode
    }[]
}
