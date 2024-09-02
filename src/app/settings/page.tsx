'use client'

import style from './page.module.scss'
import Page from '@/components/page'
import Text from '@/components/form/text'
import Group from '@/components/form/group'
import Checkbox from '@/components/form/checkbox'
import { Definitions } from '@/constants/definitions'
import Color from '@/components/form/color'
import { FormUtils } from '@/utils/form.utils'
import { useEffect, useState } from 'react'
import Grid from '@/components/grid'

const Component = () => {
    const [configs, setConfigs] = useState<any>()

    useEffect(() => {
        ;(window as any).shell = {
            configs: configs,
        }
    }, [configs])

    useEffect(() => {
        setConfigs(
            JSON.parse(
                localStorage.getItem('settings') ||
                    '{ "colorSchema": "#3399ff" }'
            )
        )
    }, [])

    return (
        <Page className={style.page}>
            <h1>Configuração</h1>
            <Group icon="local_activity" label="Local" variant="horizontal">
                <p>
                    Estas configurações ficam armazenadas, no seu navegador.
                    Fique atento, pois caso você acesse sua conta de outro
                    navegador ou de outro computador, estas configurações podem
                    estar diferentes.
                </p>
                <Grid columns="1fr 1fr 1fr">
                    {Object.keys(Definitions.settings.local).map((field) => {
                        const fieldDef = (Definitions.settings.local as any)[
                            field
                        ]

                        if (fieldDef.type === 'boolean') {
                            return (
                                <Checkbox
                                    key={field}
                                    label={fieldDef?.label}
                                    {...FormUtils.inputFieldValue(
                                        configs,
                                        setConfigs,
                                        field
                                    )}
                                />
                            )
                        }
                        if (fieldDef.type === 'color') {
                            return (
                                <Color
                                    key={field}
                                    label={fieldDef.label}
                                    {...FormUtils.inputFieldValue(
                                        configs,
                                        setConfigs,
                                        field
                                    )}
                                />
                            )
                        }

                        return (
                            <Text
                                key={field}
                                label={fieldDef?.label}
                                {...FormUtils.inputFieldValue(
                                    configs,
                                    setConfigs,
                                    field
                                )}
                            />
                        )
                    })}
                </Grid>
            </Group>
            <Group icon="public" label="Remoto" variant="vertical">
                <Grid columns="1fr">
                    {Object.keys(Definitions.settings.remote).map((field) => {
                        const fieldDef = (Definitions.settings.remote as any)[
                            field
                        ]

                        if (fieldDef.type === 'boolean') {
                            return (
                                <Checkbox
                                    key={field}
                                    label={fieldDef?.label}
                                    {...FormUtils.inputFieldValue(
                                        configs,
                                        setConfigs,
                                        field
                                    )}
                                />
                            )
                        }
                        if (fieldDef.type === 'color') {
                            return (
                                <Color
                                    key={field}
                                    label={fieldDef.label}
                                    {...FormUtils.inputFieldValue(
                                        configs,
                                        setConfigs,
                                        field
                                    )}
                                />
                            )
                        }
                        return (
                            <Text
                                key={field}
                                label={fieldDef.label}
                                {...FormUtils.inputFieldValue(
                                    configs,
                                    setConfigs,
                                    field
                                )}
                            />
                        )
                    })}
                </Grid>
            </Group>
        </Page>
    )
}

export default Component
