import { RefObject, useEffect, useRef, useState } from 'react'

const useClosestDataForm = (elementRef: RefObject<any>) => {
    const [dataForm, setDataForm] = useState<string | null>(null)
    const ref = useRef<any>(null)

    useEffect(() => {
        if (elementRef.current) {
            const closestElementForm = elementRef.current.closest('[data-form]')
            if (closestElementForm) {
                setDataForm(closestElementForm.getAttribute('data-form'))
                ref.current = closestElementForm
            }
        }
    }, [elementRef])

    return { dataForm }
}

export default useClosestDataForm
