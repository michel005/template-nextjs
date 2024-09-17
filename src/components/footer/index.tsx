import style from './index.module.scss'
import Link from 'next/link'
import { Definitions } from '@/constants/definitions'
import AppName from '@/components/header/appName'
import Icon from '@/components/icon'

const Component = () => {
    return (
        <footer className={style.footer}>
            <center>
                <div className={style.logo}>
                    <AppName />
                </div>
                <div className={style.options}>
                    {Definitions.footer.map(({ title, options }) => {
                        return (
                            <div key={title} className={style.column}>
                                <h3>{title}</h3>
                                {options.map(([label, link]) => {
                                    return (
                                        <Link key={label} href={link}>
                                            {label}
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </center>
            <center>
                <div className={style.icons}>
                    <Icon icon="message" />
                    <Icon icon="message" />
                    <Icon icon="message" />
                    <Icon icon="message" />
                    <Icon icon="message" />
                    <Icon icon="message" />
                    <Icon icon="message" />
                </div>
            </center>
            <center>
                <div className={style.icons}>
                    <p>{Definitions.footerDetails}</p>
                </div>
            </center>
        </footer>
    )
}

export default Component
