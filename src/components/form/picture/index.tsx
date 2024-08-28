import style from './index.module.scss'
import { PictureType } from '@/components/form/picture/index.type'
import { FileUtils } from '@/utils/file.utils'
import Button from '@/components/button'
import { FormUtils } from '@/utils/form.utils'
import Icon from '@/components/icon'
import { useLayoutEffect } from 'react'

const Component = ({
    id,
    label,
    initialValue,
    placeholder = '',
}: PictureType) => {
    useLayoutEffect(() => {
        if (FormUtils.getElement(id).value) {
            setPicture(FormUtils.getElement(id).value)
        }
    }, [])

    const setPicture = (response: string) => {
        FormUtils.getElement(`image_${id}`).style =
            `--picture: url(${response})`
        FormUtils.getElement(`image_${id}`).classList.add(style.haveValue)
        FormUtils.getElement(id).value = response
    }

    const loadPicture = (file: File) => {
        FileUtils.fileToBase64(file, (response) => {
            setPicture(response)
        })
    }

    return (
        <div
            className={style.picture}
            id={`image_${id}`}
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
            {label && (
                <label className={style.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={style.buttons}>
                <Button
                    icon="image_search"
                    variant="ghost"
                    type="button"
                    title="Escolher imagem"
                    onClick={() => {
                        FormUtils.getElement(`file_${id}`).click()
                    }}
                />
                <Button
                    className={style.removeButton}
                    icon="close"
                    variant="ghost"
                    type="button"
                    onClick={() => {
                        FormUtils.getElement(`image_${id}`).style = null
                        FormUtils.getElement(`file_${id}`).value = ''
                        FormUtils.getElement(id).value = ''
                        FormUtils.getElement(`image_${id}`).classList.remove(
                            style.haveValue
                        )
                    }}
                />
            </div>
            <input
                accept="image/*"
                className={style.input}
                type="file"
                id={`file_${id}`}
                placeholder={placeholder}
                onChange={(e: any) => {
                    loadPicture(e.target.files[0])
                }}
            />
            <Button
                className={style.personIcon}
                icon="add_photo_alternate"
                title="Escolher imagem"
                variant="ghost"
                onClick={() => {
                    FormUtils.getElement(`file_${id}`).click()
                }}
            />
            <input
                type="hidden"
                id={id}
                name={id}
                defaultValue={initialValue}
            />
        </div>
    )
}

export default Component