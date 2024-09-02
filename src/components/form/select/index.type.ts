import { ReactNode } from 'react'

export interface SelectType {
    label: string
    value?: string
    onChange?: (newValue: string) => void
    placeholder?: string
    disabled?: boolean
    options: {
        key: string
        label: ReactNode
    }[]
}