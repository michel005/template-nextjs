import { HomeMenu } from '@/app/page.menu'
import { ExampleModal } from '@/modals/example/index.modal'
import { MessageModal } from '@/modals/message/index.modal'
import { QuestionModal } from '@/modals/question/index.modal'
import { UserMenu } from '@/app/private/user/page.menu'

export const Definitions = {
    api: 'http://localhost:8080/api',
    appName: 'Template',
    description: 'Template do NextJS',
    privateRoutes: [
        {
            path: '/private',
            label: 'Início',
            menu: <HomeMenu />,
        },
        {
            path: '/private/user',
            label: 'Usuário',
            menu: <UserMenu />,
        },
    ],
    footer: [
        {
            title: 'Compras',
            options: [
                ['Opção 1', 'http://support.com'],
                ['Opção 2', 'http://support.com'],
                ['Opção 3', 'http://support.com'],
                ['Opção 4', 'http://support.com'],
                ['Opção 5', 'http://support.com'],
                ['Opção 6', 'http://support.com'],
            ],
        },
        {
            title: 'Suporte',
            options: [
                ['Opção 1', 'http://support.com'],
                ['Opção 2', 'http://support.com'],
                ['Opção 3', 'http://support.com'],
                ['Opção 4', 'http://support.com'],
                ['Opção 5', 'http://support.com'],
            ],
        },
        {
            title: 'Download',
            options: [
                ['Opção 1', 'http://support.com'],
                ['Opção 2', 'http://support.com'],
                ['Opção 3', 'http://support.com'],
                ['Opção 4', 'http://support.com'],
                ['Opção 5', 'http://support.com'],
                ['Opção 6', 'http://support.com'],
                ['Opção 7', 'http://support.com'],
            ],
        },
        {
            title: 'Contato',
            options: [
                ['Opção 1', 'http://support.com'],
                ['Opção 2', 'http://support.com'],
                ['Opção 3', 'http://support.com'],
            ],
        },
        {
            title: 'Ajuda',
            options: [
                ['Opção 1', 'http://support.com'],
                ['Opção 2', 'http://support.com'],
                ['Opção 3', 'http://support.com'],
                ['Opção 4', 'http://support.com'],
            ],
        },
    ],
    footerDetails: 'Template é um projeto com direitos reservados. 2024',
    modal: {
        example: <ExampleModal />,
        message: <MessageModal />,
        question: <QuestionModal />,
    },
}
