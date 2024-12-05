import { UserType } from '@/types/user.type'

export type DragDropEvent = {
    type: string
    value: any
}

export interface UserContextType {
    token?: string
    setToken: (token?: string) => void
    user?: UserType
    setUser: (user?: UserType) => void
    refresh: () => void
    isLoggedIn: boolean
    loading: boolean
    logout: () => void
    dragEvent: DragDropEvent | null
    setDragEvent: (value: DragDropEvent | null) => void
}
