import { useContext } from 'react'
import { ModalContext } from '@/context/modal.context'

const Component = <T,>(modalName: string) => {
    const { modalList, open, close } = useContext(ModalContext)

    return {
        value: modalList.find((x) => x.name === modalName)?.value as T,
        open: (value: T) => open({ name: modalName, value }),
        close: () => close({ name: modalName }),
    }
}

export default Component
