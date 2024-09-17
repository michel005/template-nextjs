import { HomeMenu } from '@/app/page.menu'
import { SettingsMenu } from '@/app/settings/page.menu'
import { ExampleModal } from '@/modals/example/index.modal'
import { MessageModal } from '@/modals/message/index.modal'
import { QuestionModal } from '@/modals/question/index.modal'
import { UserMenu } from '@/app/user/page.menu'

export const Definitions = {
    api: 'http://localhost:8080/api',
    appName: 'Template',
    description: 'Template do NextJS',
    router: [
        {
            path: '/',
            label: 'Início',
            menu: <HomeMenu />,
        },
        {
            path: '/settings',
            label: 'Configuração',
            menu: <SettingsMenu />,
        },
        {
            path: '/user',
            label: 'Usuário',
            menu: <UserMenu />,
        },
    ],
    footer: [
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
    ],
    footerDetails: 'Template é um projeto com direitos reservados. 2024',
    modal: {
        example: <ExampleModal />,
        message: <MessageModal />,
        question: <QuestionModal />,
    },
    settings: {
        remote: {
            rememberMe: {
                label: 'Lembrar-me',
                type: 'boolean',
                initialValue: true,
            },
            cookie: {
                label: 'Aceito Cookies',
                type: 'boolean',
                initialValue: true,
            },
        },
        local: {
            colorSchema: {
                label: 'Cor Principal',
                type: 'color',
                initialValue: '#3399ff',
            },
            configuration1: {
                label: 'Configuração 1',
                type: 'string',
                initialValue: 'asd',
            },
            configuration2: {
                label: 'Configuração 2',
                type: 'string',
                initialValue: 'qwe',
            },
        },
    },
}
