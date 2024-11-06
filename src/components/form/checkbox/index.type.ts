export interface CheckboxType {
    label: string
    value?: boolean
    field?: string
    onChange?: (currentValue: boolean) => void
}
