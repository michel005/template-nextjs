import style from './index.module.scss'
import Icon from '@/components/icon'
import definitions from '../../../definitions.json'

const Component = () => {
    return (
        <header className={style.header}>
            <Icon icon="list" />
            <div className={style.headerText}>
                <h1>{definitions.appName}</h1>
                <p>{definitions.description}</p>
            </div>
        </header>
    )
}

export default Component
