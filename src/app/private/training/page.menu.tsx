import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import useForm from '@/hook/useForm/useForm'
import { TrainingType } from '@/types/training.type'

export const TrainingMenu = () => {
    const router = useRouter()
    const form = useForm<TrainingType>('trainingForm')

    return (
        <>
            <Button
                icon="add"
                onClick={() => {
                    form.updateForm(() => ({
                        name: 'Novo Treino',
                        status: 'OPEN',
                    }))
                    router.push(`/private/training/new`)
                }}
            >
                Novo Treino
            </Button>
        </>
    )
}
