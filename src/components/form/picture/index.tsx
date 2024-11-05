import style from './index.module.scss'
import { PictureType } from '@/components/form/picture/index.type'
import { FileUtils } from '@/utils/file.utils'
import Button from '@/components/button'
import Icon from '@/components/icon'
import { CSSProperties, useMemo, useRef } from 'react'
import clsx from 'clsx'
import useClosestDataForm from '@/hook/useClosestDataForm'
import useForm from '@/hook/useForm/useForm'

const Component = ({
    label,
    field,
    value,
    size = '260px',
    onChange,
}: PictureType) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const { dataForm, errorForm } = useClosestDataForm(fileRef)
    const form = useForm(dataForm || 'form')

    const loadPicture = (file: File) => {
        if (file) {
            FileUtils.fileToBase64(file, (response) => {
                if (field) {
                    form.updateFormField(field, response)
                } else {
                    onChange?.(response)
                }
            })
        }
    }

    const finalValue = useMemo(
        () => (field ? form.form?.[field] || null : value),
        [field, form.form?.[field || ''], value]
    )

    return (
        <div
            className={clsx(style.picture, !!finalValue && style.haveValue)}
            style={{ '--picture-size': size } as CSSProperties}
            onDragOver={(e) => {
                e.preventDefault()
            }}
            onDragLeave={(e) => {
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.preventDefault()
                loadPicture(e.dataTransfer.files[0])
            }}
        >
            {label && <label className={style.label}>{label}</label>}
            <input
                accept="image/*"
                className={style.input}
                type="file"
                onChange={(e: any) => {
                    loadPicture(e.target.files[0])
                }}
                ref={fileRef}
            />
            <button
                className={style.personIcon}
                type="button"
                style={
                    {
                        '--picture': `${finalValue ? `url(${finalValue})` : ''}`,
                    } as CSSProperties
                }
                onClick={() => {
                    fileRef.current?.click()
                }}
            >
                <Icon icon="add_photo_alternate" />
            </button>
            <div className={style.buttons}>
                <Button
                    icon="image_search"
                    variant="ghost"
                    type="button"
                    title="Visualizar"
                    onClick={() => {
                        const newWindow = window.open()
                        if (newWindow) {
                            newWindow.document.write(
                                '<img src="' + finalValue + '" />'
                            )
                            newWindow.document.close()
                        }
                    }}
                />
                <Button
                    icon="photo_camera"
                    variant="ghost"
                    type="button"
                    title="Alterar"
                    onClick={() => {
                        fileRef.current?.click()
                    }}
                />
                <Button
                    className={style.removeButton}
                    icon="close"
                    variant="ghost"
                    type="button"
                    title="Remover"
                    onClick={() => {
                        if (field) {
                            form.updateFormField(field, null)
                        } else {
                            onChange?.('')
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Component
