import Button from '@/components/button'
import useMessage from '@/hook/useMessage'
import useApiService from '@/hook/useApiService'
import useApi from '@/hook/useApi'
import useForm from '@/hook/useForm/useForm'
import { TrainingType } from '@/types/training.type'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import useError from '@/hook/useError'
import Buttons from '@/components/buttons'

export const TrainingFormMenu = () => {
    const searchParams = useParams()
    const router = useRouter()
    const { question } = useMessage()
    const form = useForm<TrainingType>('trainingForm')
    const error = useError('trainingForm')
    const apiService = useApiService()
    const newTraining = searchParams.id === 'new'
    const apiSave = useApi(async () => {
        if (newTraining) {
            await apiService.training.create({ training: form.form })
        } else {
            await apiService.training.update({
                id: searchParams.id as string,
                training: form.form,
            })
        }
    })
    const apiRemove = useApi(async () => {
        await apiService.training.remove({ id: form.form.id as string })
    })

    useEffect(() => {
        if (apiSave.status === 'SUCCESS') {
            router.push('/private/training')
        }
        if (apiSave.status === 'ERROR') {
            error.updateErrors(apiSave.error)
        }
    }, [apiSave.status])

    useEffect(() => {
        if (apiRemove.status === 'SUCCESS') {
            router.push('/private/training')
        }
    }, [apiRemove.status])

    const disableForm = useMemo(
        () => form.form?.status !== 'OPEN',
        [form.form?.status]
    )

    return (
        <>
            <Button
                icon="save"
                onClick={() => {
                    apiSave.run()
                }}
                disabled={disableForm}
            >
                Salvar
            </Button>
            {!newTraining && (
                <>
                    {form.form?.status === 'OPEN' ? (
                        <>
                            <Button
                                icon="archive"
                                variant="secondary"
                                onClickAsync={async () => {
                                    if (form.form.id) {
                                        await apiService.training.update({
                                            id: form.form.id,
                                            training: {
                                                ...form.form,
                                                status: 'ARCHIVED',
                                            },
                                        })
                                        router.push('/private/training')
                                    }
                                }}
                            >
                                Arquivar
                            </Button>
                            <Button
                                icon="check"
                                variant="secondary"
                                onClickAsync={async () => {
                                    if (form.form.id) {
                                        await apiService.training.update({
                                            id: form.form.id,
                                            training: {
                                                ...form.form,
                                                status: 'CLOSED',
                                            },
                                        })
                                        router.push('/private/training')
                                    }
                                }}
                            >
                                Concluir
                            </Button>
                        </>
                    ) : (
                        <Button
                            icon="redo"
                            variant="secondary"
                            onClickAsync={async () => {
                                if (form.form.id) {
                                    await apiService.training.update({
                                        id: form.form.id,
                                        training: {
                                            ...form.form,
                                            status: 'OPEN',
                                        },
                                    })
                                    router.push('/private/training')
                                }
                            }}
                        >
                            Reabrir
                        </Button>
                    )}
                </>
            )}
            {!newTraining ? (
                <>
                    {form.form?.status !== 'CLOSED' && (
                        <Button
                            icon="delete"
                            variant="ghost"
                            onClick={() => {
                                question(
                                    'Deseja realmente remover este treino?',
                                    'Esta operação não pode ser desfeita.',
                                    () => {
                                        apiRemove.run()
                                    }
                                )
                            }}
                        >
                            Excluir
                        </Button>
                    )}
                </>
            ) : (
                <>
                    <Button
                        icon="undo"
                        variant="secondary"
                        onClick={() => {
                            router.push('/private/training')
                        }}
                    >
                        Cancelar
                    </Button>
                </>
            )}
        </>
    )
}
