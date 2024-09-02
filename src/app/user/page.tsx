'use client'

import { useEffect, useState } from 'react'
import { UserPageComponent } from '@/app/user/page.component'

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
        <UserPageComponent
            loading={loading}
            setAllForms={setAllForms}
            allForms={allForms}
        />
    )
}

export default Component
