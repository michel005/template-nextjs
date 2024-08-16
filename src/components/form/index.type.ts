import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

export interface FormType<T>
    extends Omit<
        DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
        'onSubmit'
    > {
    onSubmit: (form: T) => void
    initialValue?: T | null
    loading?: boolean
}
