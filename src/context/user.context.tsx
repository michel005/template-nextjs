'use client'

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { UserContextType } from './user.context.type'
import { usePathname, useRouter } from 'next/navigation'
import { UserService } from '@/services/user.service'
import { UserType } from '@/types/user.type'
import useApi from '@/hook/useApi'

export const UserContext = createContext<UserContextType>({
    isLoggedIn: false,
    loading: false,
    token: '',
    setToken: () => {},
    user: undefined,
    setUser: () => {},
    refresh: () => {},
    logout: () => {},
    dragEvent: null,
    setDragEvent: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [token, setToken] = useState<string | undefined>()
    const [user, setUser] = useState<UserType | undefined>()
    const [dragEvent, setDragEvent] = useState<any>(null)
    const userApi = useApi(async () => {
        return await new UserService({ token }).me()
    })

    const isLoggedIn = useMemo(() => !!token, [token])
    const loading = useMemo(
        () => !['SUCCESS', 'ERROR'].includes(userApi.status),
        [userApi.status]
    )

    const logout = () => {
        setToken(undefined)
        setUser(undefined)
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
        if (loading) {
            return
        }
        if (userApi.status === 'SUCCESS') {
            setUser(() => userApi.response)
        }
        if (userApi.status === 'ERROR') {
            setToken(undefined)
            setUser(undefined)
            localStorage.removeItem('token')
        }
    }, [loading])

    useEffect(() => {
        if (!loading) {
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
    }, [pathname, token, loading])

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                user,
                setUser,
                refresh: () => userApi.run(),
                loading,
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
