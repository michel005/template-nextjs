export type DragDropEvent = {
    type: string
    value: any
}

export interface UserContextType {
    token?: string
    setToken: (token?: string) => void
    isLoggedIn: boolean
    loading: boolean
    logout: () => void
    dragEvent: DragDropEvent | null
    setDragEvent: (value: DragDropEvent | null) => void
}
