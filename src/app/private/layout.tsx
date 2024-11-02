import '@/styles/global.scss'
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
