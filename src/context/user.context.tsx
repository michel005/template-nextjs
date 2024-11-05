'use client'

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { UserContextType } from './user.context.type'
import { usePathname, useRouter } from 'next/navigation'
import useApi from '@/hook/useApi'

export const UserContext = createContext<UserContextType>({
    isLogedIn: false,
    loading: false,
    token: '',
    setToken: () => {},
    logout: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const api = useApi()
    const [token, setToken] = useState<string | undefined>()
    const [loading, setLoading] = useState<boolean>(true)

    const isLogedIn = useMemo(() => !!token, [token])

    const logout = () => {
        setToken(undefined)
        localStorage.removeItem('token')
        router.push('/')
    }

    useEffect(() => {
        if (loading) {
            return
        }
        if (token) {
            if (!pathname.startsWith('/private')) {
                router.push('/private')
            }
            localStorage.setItem('token', token)
        } else {
            if (pathname.startsWith('/private')) {
                router.push('/')
            }
        }
    }, [loading, token, pathname])

    useEffect(() => {
        const existingToken = localStorage.getItem('token')

        if (existingToken) {
            api.user
                .me()
                .then((response) => {
                    setToken(existingToken)
                })
                .catch(() => {
                    localStorage.removeItem('token')
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <UserContext.Provider
            value={{ token, setToken, loading, isLogedIn, logout }}
        >
            {children}
        </UserContext.Provider>
    )
}
