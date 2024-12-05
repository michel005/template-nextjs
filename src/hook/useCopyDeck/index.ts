'use client'

import '../../../copydeck.json'
import { useContext } from 'react'
import { CopyDeckContext } from '@/context/copydeck.context'

const useCopyDeck = (type: string, group?: string) => {
    const { forms, others } = useContext(CopyDeckContext)

    if (type === 'form') {
        return forms?.[group || ''] || {}
    } else {
        return others[type]
    }
}

export default useCopyDeck
