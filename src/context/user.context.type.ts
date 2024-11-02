export interface UserContextType {
    token?: string
    setToken: (token?: string) => void
    isLogedIn: boolean
    loading: boolean
    logout: () => void
}
