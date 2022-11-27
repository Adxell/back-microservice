import express, { Request, Response } from 'express'
import cors from 'cors'
import CommentRouter from './routers/comment'
const app = express()

interface IData {
    message: string
}

app.use(cors())

app.use(express.json())

app.use('/api/comment', CommentRouter)
app.get("*", (req: Request, res: Response<IData>) => {
    res.status(404).json({ message: "404!" });
});

export default app;