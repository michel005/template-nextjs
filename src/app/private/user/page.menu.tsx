import Button from '@/components/button'
import useApiService from '../../../hook/useApiService'
import useForm from '@/hook/useForm/useForm'
import useError from '@/hook/useError'

export const UserMenu = () => {
    const form = useForm('myUser')
    const error = useError('myUser')
    const { user } = useApiService()

    return (
        <>
            <Button
                icon="save"
                onClickAsync={async () => {
                    error.clear()
                    try {
                        await user.update(form.form)

                        const usr = await user.me()
                        form.updateForm(() => usr)
                    } catch (e: any) {
                        error.updateErrors(e)
                    }
                }}
            >
                Salvar
            </Button>
        </>
    )
}
