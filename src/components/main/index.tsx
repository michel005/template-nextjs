'use client'

import Header from '@/components/header'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Providers from '@/context/providers'

const Component = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()

    return (
        <Providers>
            <body>
                <Header pathname={pathname} />
                {children}
            </body>
        </Providers>
    )
}

export default Component
