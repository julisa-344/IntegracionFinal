import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

export default function useSocket(url: string | undefined, handle: string | undefined, onUpdate: (payload: any) => void) {
    const socketRef = useRef<Socket | null>(null)

    useEffect(() => {
        if (!url || !handle) return
        const socket = io(url)
        socketRef.current = socket
        socket.on('connect', () => {
            socket.emit('subscribe', handle)
        })
        socket.on('profileViewsUpdated', (payload: any) => {
            onUpdate(payload)
        })
        return () => {
            socket.disconnect()
            socketRef.current = null
        }
    }, [url, handle, onUpdate])

    return socketRef
}
