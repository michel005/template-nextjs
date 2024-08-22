'use client'

import Modal from '@/components/modal'
import { useContext, useMemo } from 'react'
import { ModalContext } from '@/context/modal.context'
import { ModalEntityType } from '@/context/modal.context.type'

export const MessageModal = () => {
    const { modalList, close } = useContext(ModalContext)

    const message: ModalEntityType<{
        title: string
        message: string
    } | null> = useMemo(
        () => modalList.find((x) => x.name === 'message') as any,
        [modalList]
    )

    if (!message) {
        return <></>
    }

    return (
        <Modal
            onClose={() => {
                close({ name: 'message' })
            }}
        >
            <h2>{message.value?.title}</h2>
            <p>{message.value?.message}</p>
        </Modal>
    )
}
