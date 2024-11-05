import { UserContext } from '@/context/user.context'
import { UserService } from '@/services/user.service'
import { useContext } from 'react'

const useApi = () => {
    const token = localStorage.getItem('token') || ''

    return {
        user: new UserService({ token }),
    }
}

export default useApi
