'use client'

import Page from '@/components/page'
import Tabs from '@/components/tabs'
import { UserGeneralTab } from '@/app/private/user/general.tab'
import { UserAddressTab } from '@/app/private/user/address.tab'
import { UserPasswordTab } from '@/app/private/user/password.tab'
import style from '@/app/private/user/page.module.scss'
import useError from '@/hook/useError'
import { UserSettingsTab } from '@/app/private/user/settings.tab'

const Component = () => {
    const error = useError('myUser')

    return (
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

            {error.error && (
                <p
                    className={style.errors}
                    dangerouslySetInnerHTML={{
                        __html: Object.values(error.error).join('<br />'),
                    }}
                />
            )}
        </Page>
    )
}

export default Component
