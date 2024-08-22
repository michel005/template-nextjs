import { useContext } from 'react'
import { ModalContext } from '@/context/modal.context'

const Component = () => {
    const { open } = useContext(ModalContext)

    const message = (title: string, message: string) => {
        open({
            name: 'message',
            value: {
                title,
                message,
            },
        })
    }

    const question = (
        title: string,
        message: string,
        onConfirm: () => void,
        onCancel?: () => void
    ) => {
        open({
            name: 'question',
            value: {
                title,
                message,
                onConfirm,
                onCancel,
            },
        })
    }

    return { message, question }
}

export default Component
