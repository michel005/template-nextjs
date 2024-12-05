'use client'

import { createContext, ReactNode, useState } from 'react'
import { ErrorCollection, FormContextType } from './form.context.type'

export const FormContext = createContext<FormContextType>({
    error: (x) => ({}) as any,
    errorField: () => '',
    updateErrors: () => {},
    form: (x) => '' as any,
    formField: () => null,
    updateForm: () => {},
    updateFormField: () => {},
})

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<{
        [key: string]: any
    }>({
        trainingMenu: {
            viewMode: 'dashboard',
        },
    } as any)
    const [errors, setErrors] = useState<{
        [key: string]: any
    }>({})

    const getForm = (formName: string) => {
        return form?.[formName]
    }

    const getFormField = (formName: string, field: string) => {
        if (field.includes('.')) {
            const fields = field.split('.')
            const length = fields.length
            if (length === 2) {
                return form?.[formName]?.[fields[0]]?.[fields[1]]
            } else {
                return form?.[formName]?.[fields[0]]?.[fields[1]]?.[fields[2]]
            }
        } else {
            return form?.[formName]?.[field]
        }
    }

    const getError = (formName: string) => {
        return errors?.[formName]
    }

    const getErrorField = (formName: string, field: string) => {
        if (field.includes('.')) {
            const fields = field.split('.')
            const length = fields.length
            if (length === 2) {
                return errors?.[formName]?.[fields[0]]?.[fields[1]]
            } else {
                return errors?.[formName]?.[fields[0]]?.[fields[1]]?.[fields[2]]
            }
        } else {
            return errors?.[formName]?.[field]
        }
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
            if (field.includes('.')) {
                const fields = field.split('.')
                const length = fields.length
                if (length >= 2) {
                    if (!x[formName]?.[fields[0]]) {
                        x[formName][fields[0]] = {}
                    }
                    if (!x[formName][fields[0]]?.[fields[1]]) {
                        x[formName][fields[0]][fields[1]] = {}
                    }
                    if (length === 3) {
                        if (!x[formName][fields[0]]?.[fields[1]]) {
                            x[formName][fields[0]][fields[1]] = {}
                        }
                        x[formName][fields[0]][fields[1]][fields[2]] = value
                    } else {
                        x[formName][fields[0]][fields[1]] = value
                    }
                }
            } else {
                x[formName][field] = value
            }
            return { ...x }
        })
    }

    return (
        <FormContext.Provider
            value={{
                form: getForm,
                formField: getFormField,
                error: getError,
                errorField: getErrorField,
                updateErrors,
                updateForm,
                updateFormField,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
