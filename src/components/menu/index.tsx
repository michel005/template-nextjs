import style from './index.module.scss'
import clsx from 'clsx'
import { MenuType } from '@/components/menu/index.type'
import Button from '@/components/button'
import Background from '@/components/background'

const Component = ({ id, className, button, ...props }: MenuType) => {
    return (
        <div className={style.menuContainer}>
            <input
                type="checkbox"
                id={`menu_${id}`}
                className={style.checkbox}
            />
            {button ? (
                button(() => {
                    const sidebar = document.getElementById(`menu_${id}`) as any
                    sidebar.checked = !sidebar.checked
                })
            ) : (
                <Button
                    variant="ghost"
                    icon="more_horiz"
                    type="button"
                    onClick={() => {
                        const sidebar = document.getElementById(
                            `menu_${id}`
                        ) as any
                        sidebar.checked = !sidebar.checked
                    }}
                />
            )}
            <div {...props} className={clsx(style.menu, className)} />
            <Background
                className={style.background}
                onClick={() => {
                    const sidebar = document.getElementById(`menu_${id}`) as any
                    sidebar.checked = false
                }}
            />
        </div>
    )
}

export default Component
