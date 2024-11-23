import Grid from '@/components/grid'
import Color from '@/components/form/color'
import style from './page.module.scss'
import Button from '@/components/button'
import useApiService from '../../../hook/useApiService'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'
import { CSSProperties } from 'react'

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
    const form = useForm('myUser')

    return (
        <Grid columns="1fr">
            <Color label="Cor Primária" field="settings.color_schema" />
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
                                const usr2: UserType = await user.me()
                                form.updateForm(() => usr2)
                            }}
                        />
                    )
                })}
            </div>
        </Grid>
    )
}
