import Button from '@/components/button'
import { useApi } from '@/hook/useMessage/useApi'

export const UserMenu = () => {
    const { user } = useApi()
    return (
        <>
            <Button icon="save" onClickAsync={async () => {}}>
                Salvar
            </Button>
        </>
    )
}
