export interface TextType {
    field?: string
    label?: string
    value?: string
    onChange?: (currentValue: string) => void
    placeholder?: string
    disabled?: boolean
    grow?: number
    mask?: 'date' | 'time' | 'rg' | 'cpf' | 'cnpj' | 'cep'
    type?:
        | 'email'
        | 'file'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'text'
        | 'textarea'
        | 'date'
}
