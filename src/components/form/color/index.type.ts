export interface ColorType {
    label: string
    field?: string
    value?: string
    onChange?: (newValue: string) => void
    placeholder?: string
    disabled?: boolean
}
