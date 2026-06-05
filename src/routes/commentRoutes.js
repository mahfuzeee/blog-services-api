import express from "express";

import commentController from "../controllers/commentController.js";
import protect from "../middlewares/protect.js";

const router = express.Router();

router.post("/", protect, commentController.addComment);

router.get("/:blogId", commentController.getCommentsByBlogId);
// router.put("/:id", protect, commentController.updateComment);
// router.delete("/:id", protect, commentController.deleteComment);

export default router;
