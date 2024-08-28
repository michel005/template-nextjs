import style from '@/app/user/page.module.scss'
import Tabs from '@/components/tabs'
import { FormUtils } from '@/utils/form.utils'
import Form from '@/components/form'
import Group from '@/components/form/group'
import Picture from '@/components/form/picture'
import Text from '@/components/form/text'
import Button from '@/components/button'
import Skeleton from '@/components/skeleton'
import Page from '@/components/page'

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
                                <Group
                                    className={style.group}
                                    variant="horizontal"
                                >
                                    <section className={style.picture}>
                                        <Picture
                                            label="Imagem de Perfil"
                                            id="user_picture"
                                        />
                                    </section>
                                    <Group
                                        className={style.group}
                                        style={{
                                            flexGrow: 1,
                                            width: 'calc(100% - 300px)',
                                        }}
                                        variant="vertical"
                                    >
                                        <Text
                                            label="Nome Completo"
                                            id="full_name"
                                            placeholder="Ex: João da Silva"
                                            grow={4}
                                        />
                                        <Group
                                            className={style.group}
                                            variant="horizontal"
                                        >
                                            <Text
                                                label="Data de Nascimento"
                                                id="birthday"
                                                placeholder="99/99/9999"
                                                mask="date"
                                            />
                                            <Text
                                                label="E-mail"
                                                id="email"
                                                type="email"
                                            />
                                        </Group>
                                        <Group
                                            className={style.group}
                                            variant="horizontal"
                                        >
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
                                        </Group>
                                        <Text
                                            label="Biografia"
                                            id="bio"
                                            type="textarea"
                                        />
                                    </Group>
                                </Group>
                            </Form>
                        )
                    }
                    if (current?.id === 'address') {
                        return (
                            <Form
                                id="user_form"
                                initialValues={allForms.address}
                            >
                                <Group
                                    className={style.group}
                                    variant="horizontal"
                                >
                                    <Text
                                        label="CEP"
                                        id="zip_code"
                                        placeholder="99999-999"
                                        mask="cep"
                                    />
                                    <Text label="Rua" id="street" grow={5} />
                                    <Text label="Número" id="number" />
                                    <Text label="Bairro" id="neighborhood" />
                                    <Text
                                        label="Complemento"
                                        id="complement"
                                        grow={5}
                                    />
                                </Group>
                            </Form>
                        )
                    }
                    if (current?.id === 'password') {
                        return (
                            <Form
                                id="user_form"
                                initialValues={allForms.password}
                            >
                                <Group
                                    className={style.group}
                                    variant="horizontal"
                                >
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
                                </Group>
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
