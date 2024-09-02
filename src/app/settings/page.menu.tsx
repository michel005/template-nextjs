'use client'

import Button from '@/components/button'
import useMessage from '@/hook/useMessage'

export const SettingsMenu = () => {
    const { question } = useMessage()

    return (
        <>
            <Button
                icon="save"
                onClick={() => {
                    localStorage.setItem(
                        'settings',
                        JSON.stringify((window as any).shell.configs)
                    )

                    window.location.reload()
                }}
            >
                Salvar
            </Button>
            <Button
                icon="undo"
                variant="secondary"
                onClick={() => {
                    question(
                        'Deseja realmente restaurar suas configurações?',
                        'Ao fazer isso, você voltara a ver as configurações padrão.',
                        () => {
                            localStorage.removeItem('settings')

                            window.location.reload()
                        }
                    )
                }}
            >
                Restaurar Configurações
            </Button>
        </>
    )
}
