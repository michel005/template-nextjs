'use client'

import Grid from '@/components/grid'
import Color from '@/components/form/color'
import style from './page.module.scss'
import Button from '@/components/button'
import useApiService from '../../../hook/useApiService'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'
import { CSSProperties, useContext } from 'react'
import { UserContext } from '@/context/user.context'

const allColors = [
    '#b03689',
    '#6736b0',
    '#3677b0',
    '#36a1b0',
    '#36b059',
    '#9ab036',
    '#b07b36',
    '#b05736',
    '#b03636',
]

export const UserSettingsTab = () => {
    const { user } = useApiService()
    const userContext = useContext(UserContext)

    return (
        <Grid columns="1fr">
            <Color field="settings.color_schema" />
            <div className={style.colors}>
                {allColors.map((color) => {
                    return (
                        <Button
                            key={color}
                            className={style.square}
                            style={
                                { '--primary-color': color } as CSSProperties
                            }
                            onClickAsync={async () => {
                                const usr1: UserType = await user.me()
                                usr1.settings.color_schema = color
                                await user.update(usr1)
                                userContext.refresh()
                            }}
                        />
                    )
                })}
            </div>
        </Grid>
    )
}
