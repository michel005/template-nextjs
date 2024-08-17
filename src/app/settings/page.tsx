'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Text from '@/components/form/text'
import Button from '@/components/button'
import Form from '@/components/form'
import Group from '@/components/form/group'
import Buttons from '@/components/buttons'
import definitions from '../../../definitions.json'

const Component = () => {
    return (
        <Page className={style.page}>
            <Form
                initialValue={JSON.parse(
                    localStorage.getItem('settings') || '{}'
                )}
                onSubmit={(form: any) => {
                    const localData = Object.keys(
                        definitions.settings.local
                    ).map((x) => [x, form?.[x]])

                    const finalLocalData: any = {}
                    for (const [field, value] of localData) {
                        finalLocalData[field] = value
                    }

                    localStorage.setItem(
                        'settings',
                        JSON.stringify(finalLocalData)
                    )
                }}
            >
                <Buttons>
                    <Button icon="save">Salvar</Button>
                </Buttons>
                <Group icon="settings" label="Configurações">
                    <Group
                        icon="local_activity"
                        label="Local"
                        variant="horizontal"
                    >
                        {Object.keys(definitions.settings.local).map(
                            (field) => {
                                const fieldDef = (
                                    definitions.settings.local as any
                                )[field]
                                return (
                                    <Text
                                        key={field}
                                        label={fieldDef?.label}
                                        id={field}
                                        initialValue={fieldDef?.initialValue}
                                    />
                                )
                            }
                        )}
                    </Group>
                    <Group icon="public" label="Remoto" variant="horizontal">
                        {Object.keys(definitions.settings.remote).map(
                            (field) => {
                                const fieldDef = (
                                    definitions.settings.remote as any
                                )[field]
                                return (
                                    <Text
                                        key={field}
                                        label={fieldDef.label}
                                        id={field}
                                        initialValue={fieldDef.initialValue}
                                    />
                                )
                            }
                        )}
                    </Group>
                </Group>
            </Form>
        </Page>
    )
}

export default Component
