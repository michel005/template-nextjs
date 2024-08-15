import React from 'react'
import '@/styles/global.scss'
import { ConfigProvider } from '@/context/config/config.context'
import { Metadata } from 'next'
import definitions from '../../definitions.json'
import Header from '@/components/header'

export const metadata: Metadata = {
    title: definitions.appName,
    description: definitions.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <ConfigProvider>
                <body>
                    <Header />
                    {children}
                </body>
            </ConfigProvider>
        </html>
    )
}
