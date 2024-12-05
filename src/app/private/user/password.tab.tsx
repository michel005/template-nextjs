'use client'

import Grid from '@/components/grid'
import Text from '@/components/form/text'
import Button from '@/components/button'
import useForm from '@/hook/useForm/useForm'
import useError from '@/hook/useError'
import useApiService from '../../../hook/useApiService'
import { useContext } from 'react'
import { CopyDeckContext } from '@/context/copydeck.context'

export const UserPasswordTab = () => {
    const form = useForm<{
        current?: string
        new_password?: string
        confirmation?: string
    }>('changePassword')
    const error = useError('changePassword')
    const { others } = useContext(CopyDeckContext)
    const { user } = useApiService()

    return (
        <Grid columns="1fr 1fr auto" data-form="changePassword">
            <Text type="password" field="current" />
            <Text type="password" field="new_password" />
            <Grid span={2}>
                <Text type="password" field="confirmation" />
            </Grid>
            <Button
                icon="save"
                disabled={!form.form}
                onClickAsync={async () => {
                    error.clear()
                    try {
                        await user.changePassword(form.form)
                        window.location.reload()
                    } catch (e: any) {
                        error.updateErrors(e)
                    }
                }}
            >
                {others?.buttons?.change_password}
            </Button>
        </Grid>
    )
}
