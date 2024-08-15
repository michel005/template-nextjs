import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { GoogleIconType } from '@/types/googleIcon.type'

export interface ButtonType
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    icon?: GoogleIconType
    onClickAsync?: () => Promise<any>
    variant?: 'primary' | 'secondary' | 'ghost' | 'link'
}
