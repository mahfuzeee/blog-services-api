import Comment from "../models/comment.model.js";

class commentRepository {
  async addComment(comment) {
    const newComment = await Comment.create(comment);
    return newComment;
  }
}

export default new commentRepository();
