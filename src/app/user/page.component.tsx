import style from '@/app/user/page.module.scss'
import Tabs from '@/components/tabs'
import { FormUtils } from '@/utils/form.utils'
import Form from '@/components/form'
import Picture from '@/components/form/picture'
import Text from '@/components/form/text'
import Button from '@/components/button'
import Skeleton from '@/components/skeleton'
import Page from '@/components/page'
import Select from '@/components/form/select'
import Grid from '@/components/grid'

export const UserPageComponent = ({ setAllForms, allForms }: any) => {
    return (
        <Page className={style.page}>
            <h1>Meu Usuário</h1>
            <Tabs
                tabs={[
                    {
                        id: 'general',
                        label: 'Dados Gerais',
                    },
                    {
                        id: 'address',
                        label: 'Endereço',
                    },
                    {
                        id: 'password',
                        label: 'Senha de Acesso',
                    },
                ]}
                onChangeTab={(old) => {
                    setAllForms((x: any) => {
                        x[old.id] = FormUtils.values('user_form')
                        return { ...x }
                    })
                }}
                initialSelected={'general'}
            >
                {(current) => {
                    if (current?.id === 'general') {
                        return (
                            <Form
                                id="user_form"
                                initialValues={allForms.general}
                            >
                                <Grid columns="250px 1fr">
                                    <Picture
                                        label="Imagem de Perfil"
                                        id="user_picture"
                                    />
                                    <Grid columns="1fr 1fr">
                                        <Grid span={2}>
                                            <Text
                                                label="Nome Completo"
                                                id="full_name"
                                                placeholder="Ex: João da Silva"
                                            />
                                        </Grid>
                                        <Select
                                            label="Tipo de Usuário"
                                            id="user_type"
                                            options={[
                                                {
                                                    key: '1',
                                                    label: 'Exemplo 1',
                                                },
                                                {
                                                    key: '2',
                                                    label: 'Exemplo 2',
                                                },
                                                {
                                                    key: '3',
                                                    label: 'Exemplo 3',
                                                },
                                                {
                                                    key: '4',
                                                    label: 'Exemplo 4',
                                                },
                                            ]}
                                        />
                                        <Text
                                            label="Data de Nascimento"
                                            id="birthday"
                                            placeholder="99/99/9999"
                                            mask="date"
                                        />
                                        <Grid span={2} columns="1fr 1fr 1fr">
                                            <Text
                                                label="E-mail"
                                                id="email"
                                                type="email"
                                            />
                                            <Text
                                                label="CPF"
                                                id="cpf"
                                                placeholder="999.999.999-99"
                                                mask="cpf"
                                            />
                                            <Text
                                                label="Telefone"
                                                id="phone"
                                                mask="phone"
                                            />
                                        </Grid>
                                        <Grid span={2}>
                                            <Text
                                                label="Biografia"
                                                id="bio"
                                                type="textarea"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )
                    }
                    if (current?.id === 'address') {
                        return (
                            <Form
                                id="user_form"
                                initialValues={allForms.address}
                            >
                                <Grid columns="1fr 1fr 1fr">
                                    <Grid span={3} columns="1fr 1fr">
                                        <Text
                                            label="CEP"
                                            id="zip_code"
                                            placeholder="99999-999"
                                            mask="cep"
                                        />
                                        <Text label="Rua" id="street" />
                                    </Grid>
                                    <Text label="Número" id="number" />
                                    <Text label="Complemento" id="complement" />
                                    <Text label="Bairro" id="neighborhood" />
                                </Grid>
                            </Form>
                        )
                    }
                    if (current?.id === 'password') {
                        return (
                            <Form
                                id="user_form"
                                initialValues={allForms.password}
                            >
                                <Grid columns="1fr 1fr auto">
                                    <Text
                                        label="Senha Atual"
                                        id="current_password"
                                        type="password"
                                    />
                                    <Text
                                        label="Nova Senha"
                                        id="new_password"
                                        type="password"
                                    />
                                    <Button icon="save">Alterar Senha</Button>
                                </Grid>
                            </Form>
                        )
                    }
                    return (
                        <Skeleton style={{ height: 'var(--input-height)' }} />
                    )
                }}
            </Tabs>
        </Page>
    )
}
