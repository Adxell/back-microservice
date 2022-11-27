import { Request, Response } from "express";
import { ModelComments } from "../models/Comments";
interface IResponse {
    success: boolean;
    message: string | any | any[];
}

interface IComment {
    id: string;
    comment: string;
    avatar: string;
    createAt: string
}
export const getComments = async (req: Request, res: Response<IResponse>) => {

    const { id } = req.params;

    try {
        const getComment = await ModelComments.findAll({ where: { avatar: id } })
        return res.status(200).json({ success: true, message: getComment })
    } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" })
    }
}

export const createComment = async (req: Request, res: Response<IResponse>) => {
    try {
        const { comments, avatar, avatarName, author } = req.body;
        const comment = ModelComments.build({
            comments,
            avatar,
            avatarName,
            author
        })

        await comment.save()
        return res.status(201).json({ success: true, message: comment })
    } catch (error) {
        return res.status(400).json({ success: false, message: 'Bad request' })
    }
}