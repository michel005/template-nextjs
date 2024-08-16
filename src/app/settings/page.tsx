'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Text from '@/components/form/text'
import Button from '@/components/button'
import Form from '@/components/form'
import Group from '@/components/form/group'

const Component = () => {
    return (
        <Page className={style.page}>
            <Form
                initialValue={{
                    full_name: 'Michel',
                    birthday: '19/12/1991',
                }}
                onSubmit={(form) => {
                    console.log(form)
                }}
            >
                <Group label="Dados do Usuário" variant="horizontal">
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
                </Group>
                <div className={style.buttons}>
                    <Button icon="save">Salvar</Button>
                    <Button variant="secondary" icon="delete" type="reset" />
                </div>
            </Form>
        </Page>
    )
}

export default Component
