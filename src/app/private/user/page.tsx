'use client'

import { Suspense, useEffect } from 'react'
import Skeleton from '@/components/skeleton'
import useApi from '@/hook/useApi'
import useForm from '@/hook/useForm/useForm'
import Page from '@/components/page'
import Tabs from '@/components/tabs'
import { UserGeneralTab } from '@/app/private/user/general.tab'
import { UserAddressTab } from '@/app/private/user/address.tab'
import { UserPasswordTab } from '@/app/private/user/password.tab'

const Component = () => {
    const form = useForm('myUser')
    const { user } = useApi()

    useEffect(() => {
        user.me().then((response) => {
            form.updateForm(() => response)
        })
    }, [])

    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <Page data-form="myUser">
                <h1>Meu Usuário</h1>
                <Tabs
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
                            id: 'password',
                            label: 'Senha de Acesso',
                            content: <UserPasswordTab />,
                        },
                    ]}
                    initialSelected={'general'}
                />
            </Page>
        </Suspense>
    )
}

export default Component
