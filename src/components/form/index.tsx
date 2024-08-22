import style from './index.module.scss'
import { FormType } from '@/components/form/index.type'
import clsx from 'clsx'

const Component = <T = any,>({
    className,
    loading,
    id = 'form',
    ...props
}: FormType<T>) => {
    return <form {...props} id={id} className={clsx(style.form, className)} />
}

export default Component
