import { Navigate, useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
//import getConfig from 'vite'
import { getUserByHandle } from '../api/DevTreeAPI'
import HandleData from '../components/HandleData'
import useSocket from '../hooks/useSocket'
import ThemeSwitcher from '../components/ThemeSwitcher'
import LoadingSkeleton from '../components/LoadingSkeleton'

export default function HandleView() {

    const params = useParams()
    const handle = params.handle!
    const queryClient = useQueryClient()

    const { data, error, isLoading } = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ['handle', handle],
        retry: 1
    })

    const onSocketUpdate = useCallback((payload: any) => {
        if (payload.handle !== handle) return
        queryClient.setQueryData(['handle', handle], (prev: any) => ({
            ...prev,
            profileViews: payload.profileViews
        }))
    }, [handle, queryClient])

    // conectar socket (usa VITE_API_URL para la URL del backend)
    useSocket(import.meta.env.VITE_API_URL, handle, onSocketUpdate)

    if(isLoading) return <LoadingSkeleton />
    if(error) return <Navigate to={'/404'} />
    if(data) return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-end mb-5">
                <ThemeSwitcher />
            </div>
            <HandleData data={data} />
        </div>
    )
}
