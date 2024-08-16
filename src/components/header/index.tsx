import style from './index.module.scss'
import Icon from '@/components/icon'
import definitions from '../../../definitions.json'
import clsx from 'clsx'
import Link from 'next/link'
import Background from '@/components/background'

const Component = ({ pathname }: { pathname: string }) => {
    const closeSidebar = () => {
        const sidebar = document.getElementById(
            'controlSidebarVisibility'
        ) as any
        sidebar.checked = true
    }

    return (
        <>
            <header className={style.header}>
                <Icon icon="add_alert" />
                <div className={style.headerText}>
                    <Link href="/" onClick={() => closeSidebar()}>
                        <h1>{definitions.appName}</h1>
                    </Link>
                    <p>{definitions.description}</p>
                </div>
                <div className={style.options}>
                    {definitions.router.map((rout) => {
                        return (
                            <Link
                                key={rout.path}
                                href={rout.path}
                                className={clsx(
                                    pathname === rout.path && style.current
                                )}
                            >
                                {rout.label}
                            </Link>
                        )
                    })}
                </div>
                <label
                    className={style.reducerButton}
                    htmlFor="controlSidebarVisibility"
                >
                    <Icon icon="menu" />
                </label>
            </header>
            <input
                type="checkbox"
                id="controlSidebarVisibility"
                className={style.checkbox}
                defaultChecked={true}
            />
            <aside className={clsx(style.sidebar)}>
                {definitions.router.map((rout) => {
                    return (
                        <Link
                            key={rout.path}
                            href={rout.path}
                            className={clsx(
                                pathname === rout.path && style.current
                            )}
                            onClick={() => closeSidebar()}
                        >
                            {rout.label}
                        </Link>
                    )
                })}
            </aside>
            <Background
                className={style.background}
                onClick={() => closeSidebar()}
            />
        </>
    )
}

export default Component
