import commentRepository from "../repositories/commentRepository.js";

class commentService {
  async addComment(comment) {
    const newComment = await commentRepository.addComment(comment);
    return newComment;
  }
}

export default new commentService();
