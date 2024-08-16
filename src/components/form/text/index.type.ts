export interface TextType {
    label: string
    id: string
    initialValue?: string
    placeholder?: string
    type?:
        | 'color'
        | 'email'
        | 'file'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'text'
        | 'date'
}
