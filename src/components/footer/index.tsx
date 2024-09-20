import style from './index.module.scss'
import Link from 'next/link'
import { Definitions } from '@/constants/definitions'
import Icon from '@/components/icon'

const Component = () => {
    return (
        <footer className={style.footer}>
            <center className={style.logo}>
                <p>{Definitions.footerDetails}</p>
            </center>
            <hr />
            <center className={style.options}>
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
            </center>
            <hr />
            <center className={style.icons}>
                <Icon icon="message" />
                <Icon icon="message" />
                <Icon icon="message" />
                <Icon icon="message" />
                <Icon icon="message" />
                <Icon icon="message" />
                <Icon icon="message" />
            </center>
        </footer>
    )
}

export default Component
