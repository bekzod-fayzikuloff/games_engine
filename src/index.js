import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import helmet from "helmet";
import {Server} from "socket.io";
import * as http from "http";

import {ticTacToeRouter} from "./routes/tic-tac-toe.js";
import {config} from "./config.js";


const app = express()
const server = http.createServer(app)
export const io = new Server(server, {
    cors: {
        origin: config.CORS_ORIGIN
    }
})


app.use(helmet())

app.use(cors({
    origin: config.CORS_ORIGIN
}))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use("/tic-tac-toe", ticTacToeRouter)

io.on('connection', (socket) => {
    console.log(`User is connected: ${socket.id}`)
})

server.listen(config.PORT, () => {
    console.log("Server is running ...")
})
