import { useContext } from 'react'
import { FormContext } from '@/context/form.context'
import { ErrorCollection } from '@/context/form.context.type'

const useError = (formName: string) => {
    const formContext = useContext(FormContext)

    return {
        error: formContext.error(formName),
        errorField: (field: string) => formContext.errorField(formName, field),
        updateErrors: (value: ErrorCollection) =>
            formContext.updateErrors(formName, value),
        clear: () => formContext.updateErrors(formName, {}),
    }
}

export default useError
