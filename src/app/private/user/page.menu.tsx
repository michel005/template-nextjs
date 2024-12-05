import Button from '@/components/button'
import useApiService from '../../../hook/useApiService'
import useForm from '@/hook/useForm/useForm'
import useError from '@/hook/useError'
import { useContext } from 'react'
import { UserContext } from '@/context/user.context'

export const UserMenu = () => {
    const form = useForm('myUser')
    const error = useError('myUser')
    const userContext = useContext(UserContext)
    const { user } = useApiService()

    return (
        <>
            <Button
                icon="save"
                onClickAsync={async () => {
                    error.clear()
                    try {
                        await user.update(form.form)
                        userContext.refresh()
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
