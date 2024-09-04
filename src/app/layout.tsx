import React from 'react'
import '@/styles/global.scss'
import Main from '@/components/main'
import { ModalProvider } from '@/context/modal.context'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Template',
    description: 'Template NextJS',
}

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
