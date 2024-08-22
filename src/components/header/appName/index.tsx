import style from './index.module.scss'
import Icon from '@/components/icon'
import Link from 'next/link'
import { Definitions } from '@/constants/definitions'

const Component = () => {
    const closeSidebar = () => {
        const sidebar = document.getElementById(
            'controlSidebarVisibility'
        ) as any
        sidebar.checked = true
    }

    return (
        <div className={style.appName}>
            <Icon icon="add_alert" />
            <div className={style.headerText}>
                <Link href="/" onClick={() => closeSidebar()}>
                    <h1>{Definitions.appName}</h1>
                </Link>
                <p>{Definitions.description}</p>
            </div>
        </div>
    )
}

export default Component
