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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <Suspense fallback={<Skeleton style={{ height: '300px' }} />}>
            <UserPageComponent
                loading={loading}
                setAllForms={setAllForms}
                allForms={allForms}
            />
        </Suspense>
    )
}

export default Component
