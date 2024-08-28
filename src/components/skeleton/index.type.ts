import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SkeletonType
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'children'
    > {}
