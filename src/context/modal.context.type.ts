export interface ModalEntityType<T = any> {
    name: string
    value?: T | null
}

export interface ModalContextType {
    modalList: ModalEntityType[]
    open: <T>({ name, value }: ModalEntityType<T>) => void
    close: ({ name }: { name: string }) => void
}
