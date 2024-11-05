export interface ToggleType {
    label: string
    field?: string
    value?: boolean
    onChange?: (currentValue: boolean) => void
}
