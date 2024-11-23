'use client'

import Button from '@/components/button'
import Modal from '@/components/modal'
import { useContext } from 'react'
import { ModalContext } from '@/context/modal.context'

export const ExampleModal = () => {
    const { close } = useContext(ModalContext)

    return (
        <Modal
            buttons={<Button>Intendi, obrigado!</Button>}
            onClose={() => {
                close({ name: 'example' })
            }}
        >
            <h2>Bem vindo caro usuário!</h2>
            <p>Ficamos lizongeados de você estar aqui.</p>
        </Modal>
    )
}
