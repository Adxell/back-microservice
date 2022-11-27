import { Router } from "express";

import * as commentController from '../controllers/comment'

const router = Router();

router.post('/', commentController.createComment);
router.get("/:id", commentController.getComments);

export default router;