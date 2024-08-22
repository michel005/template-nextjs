import style from './index.module.scss'
import { ModalType } from '@/components/modal/index.type'
import Card from '@/components/card'
import Button from '@/components/button'
import Background from '@/components/background'
import Buttons from '@/components/buttons'

const Component = ({ onClose, children, buttons }: ModalType) => {
    return (
        <Background className={style.modal}>
            <Card className={style.modalContent}>
                <Button
                    icon="close"
                    onClick={() => {
                        onClose?.()
                    }}
                    variant="ghost"
                />
                <section>{children}</section>
                {buttons && (
                    <Buttons className={style.buttons}>{buttons}</Buttons>
                )}
            </Card>
        </Background>
    )
}

export default Component
