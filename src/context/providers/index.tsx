import { ConfigProvider } from '@/context/config/config.context'
import { ReactNode } from 'react'

const Component = ({ children }: { children: ReactNode }) => {
    return <ConfigProvider>{children}</ConfigProvider>
}

export default Component