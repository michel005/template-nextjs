import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import useForm from '@/hook/useForm/useForm'
import { TrainingType } from '@/types/training.type'
import Buttons from '@/components/buttons'
import style from './page.menu.module.scss'

export const TrainingMenu = () => {
    const router = useRouter()
    const form = useForm<TrainingType>('training')
    const trainingMenuForm = useForm('trainingMenu')

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
            <Buttons noSpace={true} className={style.viewMode}>
                <Button
                    title="Visualizar em forma de cartões"
                    icon="dashboard"
                    variant={
                        trainingMenuForm.form?.viewMode === 'dashboard'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => {
                        trainingMenuForm.updateFormField(
                            'viewMode',
                            'dashboard'
                        )
                    }}
                />
                <Button
                    title="Visualizar em forma de agenda"
                    icon="play_circle_outline"
                    variant={
                        trainingMenuForm.form?.viewMode === 'calendar'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => {
                        trainingMenuForm.updateFormField('viewMode', 'calendar')
                    }}
                />
            </Buttons>
        </>
    )
}
