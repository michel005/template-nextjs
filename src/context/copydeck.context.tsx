'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'
import { CopyDeckContextType } from '@/context/copydeck.context.type'
import CopyDeckDefinition from '../../copydeck.json'

export const CopyDeckContext = createContext<CopyDeckContextType>({
    locale: '',
    setLocale: () => {},
    forms: null,
    others: null,
})

export const CopyDeckProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState(CopyDeckDefinition.default_locale)
    const [forms, setForms] = useState<any>({})
    const [others, setOthers] = useState<any>({})

    useEffect(() => {
        import(`../../copydeck/${locale}/forms.json`).then((f) => {
            setForms(f)
        })
        import(`../../copydeck/${locale}/others.json`).then((o) => {
            setOthers(o)
        })
    }, [locale])

    return (
        <CopyDeckContext.Provider
            value={{
                locale,
                setLocale,
                forms,
                others,
            }}
        >
            {children}
        </CopyDeckContext.Provider>
    )
}
