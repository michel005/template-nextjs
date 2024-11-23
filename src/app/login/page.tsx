'use client'

import Button from '@/components/button'
import Card from '@/components/card'
import Text from '@/components/form/text'
import Grid from '@/components/grid'
import Page from '@/components/page'
import useApiService from '@/hook/useApiService'
import { LoginType } from '@/types/login.type'
import { useContext, useEffect } from 'react'
import style from './page.module.scss'
import { UserContext } from '@/context/user.context'
import Alert from '@/components/alert'
import { useRouter } from 'next/navigation'
import useForm from '@/hook/useForm/useForm'
import useApi from '@/hook/useApi'
import { LoginResponseType } from '@/types/loginResponse.type'
import useError from '@/hook/useError'

const LoginPage = () => {
    const loginForm = useForm<LoginType>('loginForm')
    const loginError = useError('loginForm')
    const { setToken } = useContext(UserContext)
    const apiService = useApiService()
    const api = useApi<LoginResponseType>(async () => {
        return await apiService.user.login(loginForm.form || {})
    })
    const router = useRouter()

    useEffect(() => {
        if (api.status === 'SUCCESS') {
            setToken(api.response?.token)
            localStorage.setItem('token', api.response?.token as string)
        }
        if (api.status === 'ERROR') {
            setToken(undefined)
            loginError.updateErrors(api.error)
        }
    }, [api.response?.token, api.status])

    return (
        <Page className={style.loginPage}>
            <Card className={style.modal} data-form="loginForm">
                <h1>Entre em sua conta agora</h1>
                <p>Tenha acesso a várias funcionalidades gratuitas.</p>
                <Text label="E-mail" field="email" />
                <Text
                    type="password"
                    label="Senha de Acesso"
                    field="password"
                />
                {loginError.error?.error && (
                    <Alert icon="error" variant="error">
                        {loginError.error?.error}
                    </Alert>
                )}
                <Grid className={style.buttons}>
                    <Button
                        icon="login"
                        onClickAsync={async () => {
                            api.run()
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
