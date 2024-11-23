'use client'

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { UserContextType } from './user.context.type'
import { usePathname, useRouter } from 'next/navigation'
import { UserService } from '@/services/user.service'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'
import useApi from '@/hook/useApi'

export const UserContext = createContext<UserContextType>({
    isLoggedIn: false,
    loading: false,
    token: '',
    setToken: () => {},
    logout: () => {},
    dragEvent: null,
    setDragEvent: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const form = useForm<UserType>('myUser')
    const [token, setToken] = useState<string | undefined>()
    const [dragEvent, setDragEvent] = useState<any>(null)
    const userApi = useApi(async () => {
        return await new UserService({ token }).me()
    })

    const isLoggedIn = useMemo(() => !!token, [token])

    const logout = () => {
        form.updateForm(() => undefined)
        setToken(undefined)
        localStorage.removeItem('token')
        router.push('/')
    }

    useEffect(() => {
        const currentToken = localStorage.getItem('token')

        if (!!currentToken) {
            setToken(currentToken)
            userApi.run()
        }
    }, [])

    useEffect(() => {
        if (token) {
            userApi.run()
        }
    }, [token])

    useEffect(() => {
        if (userApi.status === 'SUCCESS') {
            form.updateForm(() => userApi.response)
        }
        if (userApi.status === 'ERROR') {
            setToken(undefined)
            localStorage.removeItem('token')
        }
    }, [userApi.status])

    useEffect(() => {
        if (['SUCCESS', 'ERROR'].includes(userApi.status)) {
            if (token) {
                if (!pathname.startsWith('/private')) {
                    router.push('/private')
                }
            } else {
                if (pathname.startsWith('/private')) {
                    router.push('/')
                }
            }
        }
    }, [pathname, token, userApi.status])

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                loading: !['SUCCESS', 'ERROR'].includes(userApi.status),
                isLoggedIn,
                logout,
                dragEvent,
                setDragEvent,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
