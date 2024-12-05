'use client'

import Page from '@/components/page'
import Tabs from '@/components/tabs'
import { UserGeneralTab } from '@/app/private/user/general.tab'
import { UserAddressTab } from '@/app/private/user/address.tab'
import { UserPasswordTab } from '@/app/private/user/password.tab'
import { UserSettingsTab } from '@/app/private/user/settings.tab'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/user.context'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'

const Component = () => {
    const userContext = useContext(UserContext)
    const form = useForm<UserType>('myUser')

    useEffect(() => {
        form.updateForm(() => userContext.user)
    }, [userContext.user])

    return (
        <Page data-form="myUser">
            <h1>Meu Usuário</h1>
            <Tabs
                tabName="user"
                tabs={[
                    {
                        id: 'general',
                        label: 'Dados Gerais',
                        content: <UserGeneralTab />,
                    },
                    {
                        id: 'address',
                        label: 'Endereço',
                        content: <UserAddressTab />,
                    },
                    {
                        id: 'settings',
                        label: 'Configurações',
                        content: <UserSettingsTab />,
                    },
                    {
                        id: 'password',
                        label: 'Senha de Acesso',
                        content: <UserPasswordTab />,
                    },
                ]}
                initialSelected={'general'}
            />
        </Page>
    )
}

export default Component
