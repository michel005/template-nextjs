'use client'

import { useEffect, useState } from 'react'

const useApi = <T = any>(
    apiCall: (param?: any) => Promise<T>,
    configs?: {
        startRunning?: boolean
    }
) => {
    const [data, setData] = useState<{
        response?: T
        error?: any
        status: 'IDLE' | 'SCHEDULED' | 'LOADING' | 'SUCCESS' | 'ERROR'
    }>({
        status: configs?.startRunning ? 'SCHEDULED' : 'IDLE',
    })
    const [param, setParam] = useState()

    useEffect(() => {
        if (data.status === 'SCHEDULED') {
            setData((x) => {
                x.response = undefined
                x.status = 'LOADING'
                return { ...x }
            })
            apiCall(param)
                .then((response) => {
                    setData((x) => {
                        x.response = response
                        x.status = 'SUCCESS'
                        return { ...x }
                    })
                })
                .catch((error) => {
                    setData((x) => {
                        x.error = error
                        x.status = 'ERROR'
                        return { ...x }
                    })
                })
        }
    }, [data.status])

    return {
        ...data,
        run: (param?: any) => {
            setParam(param)
            setData((x) => {
                x.status = 'SCHEDULED'
                return { ...x }
            })
        },
    }
}

export default useApi
