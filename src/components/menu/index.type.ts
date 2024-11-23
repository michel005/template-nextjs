import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface MenuType
    extends Omit<
        Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'onChange'
        >,
        'children'
    > {
    onChange?: (show: boolean) => void
    button?: (alternate: () => void) => ReactNode
    children?: (show: boolean, setShow: (s: boolean) => void) => ReactNode
}
