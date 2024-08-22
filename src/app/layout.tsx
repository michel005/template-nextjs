'use client'

import React from 'react'
import '@/styles/global.scss'
import Main from '@/components/main'
import { ModalProvider } from '@/context/modal.context'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <ModalProvider>
                <Main>{children}</Main>
            </ModalProvider>
        </html>
    )
}
