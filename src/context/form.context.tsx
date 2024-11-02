'use client'

import { createContext, ReactNode, useState } from 'react'
import { ErrorCollection, FormContextType } from './form.context.type'

export const FormContext = createContext<FormContextType>({
    error: (x) => ({}) as any,
    updateErrors: () => {},
    form: (x) => '' as any,
    updateForm: () => {},
    updateFormField: () => {},
})

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<{
        [key: string]: any
    }>({})
    const [errors, setErrors] = useState<{
        [key: string]: any
    }>({})

    const getForm = (formName: string) => {
        return form?.[formName]
    }

    const getErrors = (formName: string) => {
        return errors?.[formName]
    }

    const updateForm = <T,>(formName: string, value: (oldValue: T) => T) => {
        setForm((x) => {
            x[formName] = value(x[formName])
            return { ...x }
        })
    }

    const updateErrors = (formName: string, value: ErrorCollection) => {
        setErrors((x) => {
            x[formName] = value
            return { ...x }
        })
    }

    const updateFormField = (formName: string, field: string, value: any) => {
        setForm((x) => {
            if (!x[formName]) {
                x[formName] = {}
            }
            x[formName][field] = value
            return { ...x }
        })
    }

    return (
        <FormContext.Provider
            value={{
                form: getForm,
                error: getErrors,
                updateErrors,
                updateForm,
                updateFormField,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
