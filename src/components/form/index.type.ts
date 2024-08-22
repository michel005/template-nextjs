import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

export interface FormType<T>
    extends Omit<
        DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
        'onSubmit'
    > {
    loading?: boolean
}
