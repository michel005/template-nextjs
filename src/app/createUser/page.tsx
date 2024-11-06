'use client'

import Alert from '@/components/alert'
import Button from '@/components/button'
import Buttons from '@/components/buttons'
import Group from '@/components/form/group'
import Picture from '@/components/form/picture'
import Text from '@/components/form/text'
import Grid from '@/components/grid'
import Page from '@/components/page'
import { UserContext } from '@/context/user.context'
import useApi from '@/hook/useApi'
import { UserType } from '@/types/user.type'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import style from './page.module.scss'
import useForm from '@/hook/useForm/useForm'

const CreateUserPage = () => {
    const [error, setError] = useState<string | undefined>(undefined)
    const { setToken } = useContext(UserContext)
    const form = useForm<UserType>('createUser')
    const router = useRouter()
    const api = useApi()

    return (
        <Page className={style.loginPage}>
            <Group form="createUser">
                <h1>Criando um novo usuário</h1>
                <p>
                    Informe os dados necessários para cadastrar você no sistema.
                    Assim você tem acesso a funcionalidades gratuitas.
                </p>
                <Grid columns="auto 1fr">
                    <Picture label="Foto" size="200px" field="picture" />
                    <Grid>
                        <Text label="Nome Completo" field="full_name" />
                        <Text
                            label="Data de Nascimento"
                            field="birthday"
                            mask="date"
                        />
                        <Text label="E-mail" field="email" />
                        <Text
                            type="password"
                            label="Senha de Acesso"
                            field="password"
                        />
                        <Text
                            type="password"
                            label="Confirmação da Senha"
                            field="password_confirm"
                        />
                    </Grid>
                </Grid>
                {error && (
                    <Alert icon="error" variant="error">
                        {error}
                    </Alert>
                )}
                <Buttons className={style.buttons}>
                    <Button
                        icon="undo"
                        variant="ghost"
                        onClick={() => {
                            router.push('/login')
                        }}
                    >
                        Voltar ao Login
                    </Button>
                    <Button
                        icon="save"
                        onClickAsync={async () => {
                            setError(undefined)
                            try {
                                const response: any = await api.user.create(
                                    form.form
                                )
                                setToken(response?.token)
                            } catch (e: any) {
                                setError(e.error)
                            }
                        }}
                    >
                        Cadastrar
                    </Button>
                </Buttons>
            </Group>
        </Page>
    )
}

export default CreateUserPage
