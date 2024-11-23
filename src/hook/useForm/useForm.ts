import { useContext } from 'react'
import { FormContext } from '@/context/form.context'

const useForm = <T = any>(formName: string) => {
    const formContext = useContext(FormContext)

    return {
        form: formContext.form(formName) as T,
        formField: (field: string) => formContext.formField(formName, field),
        updateForm: (value: (oldValue: T) => T | undefined) =>
            formContext.updateForm(formName, value),
        updateFormField: (field: string, value: any) =>
            formContext.updateFormField(formName, field, value),
    }
}

export default useForm
