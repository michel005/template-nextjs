import Main from '@/components/main'
import { FormProvider } from '@/context/form.context'
import { ModalProvider } from '@/context/modal.context'
import { UserProvider } from '@/context/user.context'
import '../styles/global.scss'
import { Metadata } from 'next'
import React from 'react'
import { CopyDeckProvider } from '@/context/copydeck.context'

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
        <FormProvider>
            <UserProvider>
                <ModalProvider>
                    <CopyDeckProvider>
                        <html lang="pt-br">
                            <body>
                                <Main>
                                    <section>{children}</section>
                                </Main>
                            </body>
                        </html>
                    </CopyDeckProvider>
                </ModalProvider>
            </UserProvider>
        </FormProvider>
    )
}
