import commentService from "../services/commentService.js";
import logger from "../utils/logger.js";

class commentController {
  async getAllComments(req, res, next) {
    try {
      const comments = await commentService.getAllComments();
      res.status(200).json({
        success: true,
        message: "All comments",
        data: comments,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  }

  //Create a new comment
  async addComment(req, res, next) {
    const commetData = {
      ...req.body,
      user: req.user._id,
    };
    try {
      if (!req.body.comment || !req.body.blogId) {
        throw new Error("Please add a comment and blog post id");
      }
      const comment = await commentService.addComment(commetData);
      res.status(201).json({
        success: true,
        message: "Comment added successfully",
        data: comment,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  }
}

export default new commentController();
