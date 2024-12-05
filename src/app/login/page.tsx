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
import useCopyDeck from '@/hook/useCopyDeck'
import { CopyDeckContext } from '@/context/copydeck.context'

const LoginPage = () => {
    const loginForm = useForm<LoginType>('login')
    const loginError = useError('login')
    const { setToken } = useContext(UserContext)
    const apiService = useApiService()
    const api = useApi<LoginResponseType>(async () => {
        return await apiService.user.login(loginForm.form || {})
    })
    const { others: copyDeck } = useContext(CopyDeckContext)
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
            <Card className={style.modal} data-form="login">
                <h1>{copyDeck?.login?.login_header}</h1>
                <p>{copyDeck?.login?.login_description}</p>
                <Text field="email" />
                <Text type="password" field="password" />
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
                        {copyDeck?.buttons?.login}
                    </Button>
                </Grid>
                <hr data-text={copyDeck?.login?.or} />
                <h3>{copyDeck?.login?.create_account_header}</h3>
                <Grid className={style.buttons}>
                    <Button
                        icon="person_add"
                        variant="secondary"
                        onClick={() => {
                            router.push('/createUser')
                        }}
                    >
                        {copyDeck?.buttons?.signin}
                    </Button>
                </Grid>
            </Card>
        </Page>
    )
}

export default LoginPage
