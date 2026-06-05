import commentRepository from "../repositories/commentRepository.js";

class commentService {
  async addComment(comment) {
    if (comment.parentComment) {
      const parentComment = await commentRepository.getCommentById(
        comment.parentComment,
      );
      if (!parentComment) {
        throw new Error("Parent comment not found");
      }
    }
    const newComment = await commentRepository.addComment(comment);
    return newComment;
  }

  //Get comment by blog post id
  async getCommentsByBlogId(blogId) {
    const comments = await commentRepository.getCommentsByBlogId(blogId);

    //Build the comment tree
    const tree = [];
    const commentMap = {};

    comments.forEach((comment) => {
      comment.replies = [];
      commentMap[comment._id] = comment;
    });

    comments.forEach((comment) => {
      if (comment.parentComment) {
        if (commentMap[comment.parentComment]) {
          commentMap[comment.parentComment].replies.push(comment);
        }
      } else {
        tree.push(comment);
      }
    });
    return tree;
  }
}

export default new commentService();
