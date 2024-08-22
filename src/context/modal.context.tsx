import React, { createContext, ReactNode, useState } from 'react'
import { ModalContextType, ModalEntityType } from '@/context/modal.context.type'

export const ModalContext = createContext<ModalContextType>({
    modalList: [],
    open: () => {},
    close: () => {},
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modal, setModal] = useState<ModalEntityType[]>([])

    const open = <T,>({ name, value }: ModalEntityType<T>) => {
        setModal((m) => {
            if (!m.find((mm) => mm.name === name)) {
                m.push({
                    name,
                    value,
                })
            }
            return [...m]
        })
    }
    const close = ({ name }: { name: string }) => {
        setModal((m) => {
            const founded = m.findIndex((mm) => mm.name === name)
            if (founded !== -1) {
                m.splice(founded, 1)
            }
            return [...m]
        })
    }

    return (
        <ModalContext.Provider value={{ modalList: modal, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}
