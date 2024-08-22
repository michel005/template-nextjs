import style from './page.module.scss'
import Page from '@/components/page'
import Text from '@/components/form/text'
import Form from '@/components/form'
import Group from '@/components/form/group'
import Checkbox from '@/components/form/checkbox'
import { Definitions } from '@/constants/definitions'

const Component = () => {
    return (
        <Page className={style.page}>
            <Form id="form">
                <Group icon="settings" label="Configurações">
                    <Group
                        icon="local_activity"
                        label="Local"
                        variant="horizontal"
                    >
                        {Object.keys(Definitions.settings.local).map(
                            (field) => {
                                const fieldDef = (
                                    Definitions.settings.local as any
                                )[field]

                                if (fieldDef.type === 'boolean') {
                                    return (
                                        <Checkbox
                                            key={field}
                                            label={fieldDef?.label}
                                            id={field}
                                        />
                                    )
                                }

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
                    <Group icon="public" label="Remoto" variant="vertical">
                        {Object.keys(Definitions.settings.remote).map(
                            (field) => {
                                const fieldDef = (
                                    Definitions.settings.remote as any
                                )[field]

                                if (fieldDef.type === 'boolean') {
                                    return (
                                        <Checkbox
                                            key={field}
                                            label={fieldDef?.label}
                                            id={field}
                                        />
                                    )
                                }
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
