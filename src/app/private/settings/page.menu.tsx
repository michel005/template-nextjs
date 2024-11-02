'use client'

import Button from '@/components/button'
import useMessage from '@/hook/useMessage'
import { ColorUtils } from '@/utils/color.utils'

export const SettingsMenu = () => {
    const { question, message } = useMessage()

    const save = () => {
        localStorage.setItem(
            'settings',
            JSON.stringify((window as any).shell.configs)
        )

        window.location.reload()
    }

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
                        question(
                            'Anteção ao escolher uma cor!',
                            'Esta cor pode deixar alguns textos difíceis de se ler. Deseja realmente utilizala?',
                            () => {
                                save()
                            }
                        )
                    } else {
                        save()
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
