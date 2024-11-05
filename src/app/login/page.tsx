'use client'

import Button from '@/components/button'
import Card from '@/components/card'
import Text from '@/components/form/text'
import Grid from '@/components/grid'
import Page from '@/components/page'
import useApi from '@/hook/useApi'
import { LoginType } from '@/types/login.type'
import { FormUtils } from '@/utils/form.utils'
import { useContext, useState } from 'react'
import style from './page.module.scss'
import { UserContext } from '@/context/user.context'
import Alert from '@/components/alert'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const [loginForm, setLoginForm] = useState<LoginType>({})
    const [error, setError] = useState<string | undefined>(undefined)
    const { setToken } = useContext(UserContext)
    const api = useApi()
    const router = useRouter()

    return (
        <Page className={style.loginPage}>
            <Card className={style.modal}>
                <h1>Entre em sua conta agora</h1>
                <p>Tenha acesso a várias funcionalidades gratuitas.</p>
                <Text
                    label="E-mail"
                    {...FormUtils.inputFieldValue(
                        loginForm,
                        setLoginForm,
                        'email'
                    )}
                />
                <Text
                    type="password"
                    label="Senha de Acesso"
                    {...FormUtils.inputFieldValue(
                        loginForm,
                        setLoginForm,
                        'password'
                    )}
                />
                {error && (
                    <Alert icon="error" variant="error">
                        {error}
                    </Alert>
                )}
                <Grid className={style.buttons}>
                    <Button
                        icon="login"
                        onClickAsync={async () => {
                            setError(undefined)
                            try {
                                const response: any =
                                    await api.user.login(loginForm)
                                setToken(response?.token)
                            } catch (e: any) {
                                setError(e.error)
                            }
                        }}
                    >
                        Entrar
                    </Button>
                </Grid>
                <hr data-text="OU" />
                <h3>Crie uma conta</h3>
                <Grid className={style.buttons}>
                    <Button
                        icon="person_add"
                        variant="secondary"
                        onClick={() => {
                            router.push('/createUser')
                        }}
                    >
                        Cadastrar-se
                    </Button>
                </Grid>
            </Card>
        </Page>
    )
}

export default LoginPage
