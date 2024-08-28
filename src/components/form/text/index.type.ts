import { FocusEventHandler } from 'react'

export interface TextType {
    label: string
    id: string
    initialValue?: string
    placeholder?: string
    grow?: number
    mask?: 'date' | 'time' | 'rg' | 'cpf' | 'cnpj' | 'cep' | 'phone'
    type?:
        | 'color'
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
