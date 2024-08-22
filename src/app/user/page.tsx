import style from './page.module.scss'
import Page from '@/components/page'
import Text from '@/components/form/text'
import Button from '@/components/button'
import Form from '@/components/form'
import Group from '@/components/form/group'

const Component = () => {
    return (
        <Page className={style.page}>
            <Form id="user_form">
                <Group icon="person" label="Meu Usuário">
                    <Group
                        icon="description"
                        label="Dados do Usuário"
                        variant="horizontal"
                    >
                        <Text
                            label="Nome Completo"
                            id="full_name"
                            placeholder="Ex: João da Silva"
                        />
                        <Text
                            label="Data de Nascimento"
                            id="birthday"
                            placeholder="99/99/9999"
                            type="date"
                        />
                        <Text label="E-mail" id="email" type="email" />
                    </Group>
                    <Group icon="map" label="Endereço" variant="horizontal">
                        <Text
                            label="CEP"
                            id="zip_code"
                            placeholder="99999-999"
                        />
                        <Text label="Rua" id="street" />
                        <Text label="Bairro" id="neighborhood" />
                        <Text label="Número" id="number" />
                        <Text label="Complemento" id="complement" />
                    </Group>
                    <Group
                        icon="track_changes"
                        label="Local"
                        variant="horizontal"
                    >
                        <Text label="País" id="country" />
                        <Text label="Estado" id="state" />
                        <Text label="Cidade" id="city" />
                    </Group>
                </Group>
            </Form>
            <Form id="change_password_form">
                <Group
                    icon="password"
                    label="Senha de Acesso"
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
        </Page>
    )
}

export default Component
