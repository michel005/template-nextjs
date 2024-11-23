'use client'

import Button from '@/components/button'
import useMessage from '@/hook/useMessage'

export const HomeMenu = () => {
    const message = useMessage()

    return (
        <>
            <Button
                icon="message"
                onClick={() => {
                    message.message(
                        'Bem vindo ao Template',
                        'Aqui você esta vendo um template de desenvolvimento frontend para NextJS.'
                    )
                }}
            >
                Mensagem
            </Button>
            <Button
                icon="query_stats"
                onClick={() => {
                    message.question(
                        'Deseja realmente realizar esta pergunta?',
                        'Ao responder, você estara testando uma mensagem de pergunta.',
                        () => {
                            message.message(
                                'Confirmação de pergunta!',
                                'Você confirmou uma pergunta.'
                            )
                        },
                        () => {
                            message.message(
                                'Cancelamento de pergunta!',
                                'Você cancelou uma pergunta.'
                            )
                        }
                    )
                }}
            >
                Pergunta
            </Button>
        </>
    )
}
