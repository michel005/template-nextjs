'use client'

import { Suspense, useEffect, useState } from 'react'
import { UserPageComponent } from '@/app/private/user/page.component'
import Skeleton from '@/components/skeleton'
import { useApi } from '@/hook/useMessage/useApi'

const Component = () => {
    const [allForms, setAllForms] = useState<any>({
        general: {},
        address: {},
        password: {},
    })
    const [loading, setLoading] = useState<boolean>(true)
    const [progress, setProgress] = useState<number>(0)
    const { user } = useApi()

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((x) => {
                const nextNumber = x + Math.random() / 10
                if (nextNumber >= 1) {
                    clearInterval(interval)
                    return 1
                }
                return nextNumber
            })
        }, 2000)
    }, [])

    useEffect(() => {
        user.me()
            .then((response) => {
                setAllForms((x: any) => {
                    return {
                        ...x,
                        general: response,
                    }
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <UserPageComponent
                progress={progress}
                loading={loading}
                setAllForms={setAllForms}
                allForms={allForms}
            />
        </Suspense>
    )
}

export default Component
