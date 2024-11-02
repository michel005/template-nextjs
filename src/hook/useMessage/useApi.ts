import { UserContext } from '@/context/user.context'
import { UserService } from '@/services/user.service'
import { useContext } from 'react'

export const useApi = () => {
    const { token } = useContext(UserContext)

    return {
        user: new UserService({ token }),
    }
}
