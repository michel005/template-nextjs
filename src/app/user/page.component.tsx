import Tabs from '@/components/tabs'
import Page from '@/components/page'
import { UserGeneralTab } from '@/app/user/general.tab'
import { UserAddressTab } from '@/app/user/address.tab'
import { UserPasswordTab } from '@/app/user/password.tab'
import Progress from '@/components/progress'

export const UserPageComponent = ({
    progress,
    loading,
    setAllForms,
    allForms,
}: any) => {
    return (
        <Page>
            <h1>Meu Usuário</h1>
            <Progress value={progress}>{Math.round(progress * 100)}%</Progress>
            <Tabs
                tabs={[
                    {
                        id: 'general',
                        label: 'Dados Gerais',
                        content: (
                            <UserGeneralTab
                                loading={loading}
                                allForms={allForms}
                                setAllForms={setAllForms}
                            />
                        ),
                    },
                    {
                        id: 'address',
                        label: 'Endereço',
                        content: (
                            <UserAddressTab
                                loading={loading}
                                allForms={allForms}
                                setAllForms={setAllForms}
                            />
                        ),
                    },
                    {
                        id: 'password',
                        label: 'Senha de Acesso',
                        content: (
                            <UserPasswordTab
                                loading={loading}
                                allForms={allForms}
                                setAllForms={setAllForms}
                            />
                        ),
                    },
                ]}
                initialSelected={'general'}
            />
        </Page>
    )
}
