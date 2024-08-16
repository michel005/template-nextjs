import React from 'react'
import '@/styles/global.scss'
import { Metadata } from 'next'
import definitions from '../../definitions.json'
import Main from '@/components/main'

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
            <Main>{children}</Main>
        </html>
    )
}
