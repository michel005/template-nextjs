import { ExampleModal } from '@/modals/example/index.modal'
import { MessageModal } from '@/modals/message/index.modal'
import { QuestionModal } from '@/modals/question/index.modal'
import { UserMenu } from '@/app/private/user/page.menu'
import { TrainingMenu } from '@/app/private/training/page.menu'
import { TrainingFormMenu } from '@/app/private/training/[id]/page.menu'
import { ExerciseModal } from '@/modals/exercise/index.modal'

export const Definitions = {
    api: 'http://localhost:8080/api',
    appName: 'Template',
    description: 'Template do NextJS',
    privateRoutes: [
        {
            path: '/private',
            label: 'Início',
        },
        {
            path: '/private/training',
            label: 'Treino',
            menu: <TrainingMenu />,
        },
        {
            path: '/private/training/[id]',
            label: 'Treino',
            menu: <TrainingFormMenu />,
            hide: true,
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
        exercise: <ExerciseModal />,
        message: <MessageModal />,
        question: <QuestionModal />,
    },
}
