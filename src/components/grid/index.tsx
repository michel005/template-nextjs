import style2 from './index.module.scss'
import clsx from 'clsx'
import { GridType } from '@/components/grid/index.type'
import { CSSProperties } from 'react'

const Component = ({
    className,
    style,
    columns = '1fr',
    rows,
    span,
    ...props
}: GridType) => {
    return (
        <div
            {...props}
            style={
                {
                    ...style,
                    gridTemplateColumns: columns,
                    gridTemplateRows: rows,
                    gridColumn: `span ${span}`,
                } as CSSProperties
            }
            className={clsx(style2.grid, className)}
        />
    )
}

export default Component
