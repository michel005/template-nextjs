import style from './index.module.scss'
import { PictureType } from '@/components/form/picture/index.type'
import { FileUtils } from '@/utils/file.utils'
import Button from '@/components/button'
import Icon from '@/components/icon'
import { CSSProperties, useRef } from 'react'
import clsx from 'clsx'

const Component = ({ label, value, onChange }: PictureType) => {
    const fileRef = useRef<HTMLInputElement>(null)

    const loadPicture = (file: File) => {
        if (file) {
            FileUtils.fileToBase64(file, (response) => {
                onChange?.(response)
            })
        }
    }

    return (
        <div
            className={clsx(style.picture, !!value && style.haveValue)}
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
                        '--picture': `url(${value})`,
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
                                '<img src="' + value + '" />'
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
                        onChange?.('')
                    }}
                />
            </div>
        </div>
    )
}

export default Component
