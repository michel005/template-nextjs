import { ReactNode } from 'react'

export interface ModalType {
    onClose?: () => void
    children: ReactNode
    buttons?: ReactNode
}
