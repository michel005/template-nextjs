export type ErrorCollection = { [key: string]: string }

export interface FormContextType {
    error: (formName: string) => ErrorCollection
    errorField: (formName: string, field: string) => string
    updateErrors: (formName: string, errors: ErrorCollection) => void
    form: <T = any>(formName: string) => T
    formField: (formName: string, field: string) => any
    updateForm: <T = any>(formName: string, value: (oldValue: T) => T) => void
    updateFormField: (formName: string, formField: string, value: any) => void
}
