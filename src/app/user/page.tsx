'use client'

import { useState } from 'react'
import { UserPageComponent } from '@/app/user/page.component'

const Component = () => {
    const [allForms, setAllForms] = useState<any>({
        general: {},
        address: {},
        password: {},
    })

    return <UserPageComponent setAllForms={setAllForms} allForms={allForms} />
}

export default Component
