import { Server as IOServer } from 'socket.io'
import http from 'http'

let io: IOServer | null = null

export const initSocket = (httpServer: http.Server) => {
    io = new IOServer(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL || '*',
            methods: ['GET','POST']
        }
    })

    io.on('connection', (socket) => {
        socket.on('subscribe', (handle: string) => {
            socket.join(`handle:${handle}`)
        })
    })

    return io
}

export const getIO = () => io
