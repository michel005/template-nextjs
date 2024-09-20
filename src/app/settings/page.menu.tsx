'use client'

import Button from '@/components/button'
import useMessage from '@/hook/useMessage'
import { ColorUtils } from '@/utils/color.utils'

export const SettingsMenu = () => {
    const { question, message } = useMessage()

    return (
        <>
            <Button
                icon="save"
                onClick={() => {
                    if (
                        !ColorUtils.checkContrast(
                            '#f9f9f9',
                            (window as any).shell.configs.colorSchema
                        )
                    ) {
                        message(
                            'Cor Inválida!',
                            'Esta cor é muito dificil de visualizar. Utilize outra cor.'
                        )
                    } else {
                        localStorage.setItem(
                            'settings',
                            JSON.stringify((window as any).shell.configs)
                        )

                        window.location.reload()
                    }
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
