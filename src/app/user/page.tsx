'use client'

import { Suspense, useEffect, useState } from 'react'
import { UserPageComponent } from '@/app/user/page.component'
import Skeleton from '@/components/skeleton'

const Component = () => {
    const [allForms, setAllForms] = useState<any>({
        general: {},
        address: {},
        password: {},
    })
    const [loading, setLoading] = useState<boolean>(true)
    const [progress, setProgress] = useState<number>(0)

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
        setTimeout(() => {
            setLoading(false)
        }, 2000)
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
