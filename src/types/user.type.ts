export interface UserType {
    picture?: string
    full_name?: string
    email?: string
    personType?: 'PF' | 'PJ'
    documentType?: 'RG' | 'CPF' | 'CNPJ'
    documentNumber?: string
    password?: string
    birthday?: Date
}
