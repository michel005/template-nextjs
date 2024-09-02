import Grid from '@/components/grid'
import Text from '@/components/form/text'
import Button from '@/components/button'
import { FormUtils } from '@/utils/form.utils'
import Skeleton from '@/components/skeleton'

export const UserPasswordTab = ({ loading, setAllForms, allForms }: any) => {
    if (loading) {
        return (
            <Grid columns="1fr 1fr auto">
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        minWidth: '200px',
                        height: 'var(--input-height)',
                    }}
                />
            </Grid>
        )
    }

    return (
        <Grid columns="1fr 1fr auto">
            <Text
                label="Senha Atual"
                type="password"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'password',
                    'current_password'
                )}
            />
            <Text
                label="Nova Senha"
                type="password"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'password',
                    'new_password'
                )}
            />
            <Button icon="save">Alterar Senha</Button>
        </Grid>
    )
}
