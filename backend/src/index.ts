import colors from 'colors'
import http from 'http'
import server from './server'
import { initSocket } from './socket'

const port  = process.env.PORT || "4001"

const httpServer = http.createServer(server)
const io = initSocket(httpServer)

httpServer.listen(port, () => {
    console.log( colors.blue.bold( `Servidor Funcionando en el puerto: ${port} `) )
});
