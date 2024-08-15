import style from './index.module.scss'
import { GoogleIconType } from '@/types/googleIcon.type'

const Component = ({ icon }: { icon: GoogleIconType }) => {
    return <i className={style.icon}>{icon}</i>
}

export default Component
