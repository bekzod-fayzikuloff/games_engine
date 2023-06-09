import {Router} from "express";
import {io} from "../index.js";


const router = Router()
router.post("/", (req, res) => {
    const {roomId} = req.body
    io.emit(`room_id#${roomId}`, req.body)
    res.json({foo: "bar :)"})
})

export {router as ticTacToeRouter}
