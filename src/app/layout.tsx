import React from 'react'
import '@/styles/global.scss'
import Main from '@/components/main'
import { ModalProvider } from '@/context/modal.context'
import { Metadata } from 'next'
import Footer from '@/components/footer'

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
                <Main>
                    <section>{children}</section>
                </Main>
            </ModalProvider>
        </html>
    )
}
