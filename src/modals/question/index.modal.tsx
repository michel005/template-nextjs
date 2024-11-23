'use client'

import Modal from '@/components/modal'
import { useContext, useMemo } from 'react'
import { ModalContext } from '@/context/modal.context'
import { ModalEntityType } from '@/context/modal.context.type'
import Button from '@/components/button'

export const QuestionModal = () => {
    const { modalList, close } = useContext(ModalContext)

    const message: ModalEntityType<{
        title: string
        message: string
        onConfirm?: () => void
        onCancel?: () => void
    } | null> = useMemo(
        () => modalList.find((x) => x.name === 'question') as any,
        [modalList]
    )

    if (!message) {
        return <></>
    }

    return (
        <Modal
            buttons={
                <>
                    <Button
                        icon="cancel"
                        variant="ghost"
                        onClick={() => {
                            message.value?.onCancel?.()
                            close({ name: 'question' })
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        icon="check"
                        onClick={() => {
                            message.value?.onConfirm?.()
                            close({ name: 'question' })
                        }}
                    >
                        Confirmar
                    </Button>
                </>
            }
            onClose={() => {
                close({ name: 'question' })
            }}
        >
            <h2>{message.value?.title}</h2>
            <p>{message.value?.message}</p>
        </Modal>
    )
}
