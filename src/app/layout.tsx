import Main from '@/components/main'
import { FormProvider } from '@/context/form.context'
import { ModalProvider } from '@/context/modal.context'
import { UserProvider } from '@/context/user.context'
import '@/styles/global.scss'
import { Metadata } from 'next'
import React from 'react'

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
            <FormProvider>
                <UserProvider>
                    <ModalProvider>
                        <Main>
                            <section>{children}</section>
                        </Main>
                    </ModalProvider>
                </UserProvider>
            </FormProvider>
        </html>
    )
}
