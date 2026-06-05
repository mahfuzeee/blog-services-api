import Comment from "../models/comment.model.js";

class commentRepository {
  async addComment(comment) {
    const newComment = await Comment.create(comment);
    return newComment;
  }

  async getCommentById(id) {
    const comment = await Comment.findById(id);
    return comment;
  }
  async getCommentsByBlogId(blogId) {
    const comments = await Comment.find({ blogId })
      .populate("user", "name email")
      .sort({ createdAt: 1 })
      .lean();
    return comments;
  }
}

export default new commentRepository();
