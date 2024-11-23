import Grid from '@/components/grid'
import Text from '@/components/form/text'
import Button from '@/components/button'
import useForm from '@/hook/useForm/useForm'
import useError from '@/hook/useError'
import useApiService from '../../../hook/useApiService'

export const UserPasswordTab = () => {
    const form = useForm<{
        current?: string
        new_password?: string
        confirmation?: string
    }>('changePassword')
    const error = useError('changePassword')
    const { user } = useApiService()

    return (
        <Grid columns="1fr 1fr auto" data-form="changePassword">
            <Text label="Senha Atual" type="password" field="current" />
            <Text label="Nova Senha" type="password" field="new_password" />
            <Grid span={2}>
                <Text
                    label="Confirmação da Nova Senha"
                    type="password"
                    field="confirmation"
                />
            </Grid>
            <Button
                icon="save"
                disabled={!form.form}
                onClickAsync={async () => {
                    error.clear()
                    try {
                        await user.changePassword(form.form)
                        window.location.reload()
                    } catch (e: any) {
                        error.updateErrors(e)
                    }
                }}
            >
                Alterar Senha
            </Button>
        </Grid>
    )
}
