import blogRepository from "../repositories/blogRepository.js";

class blogService {
  async getAllBlogs() {
    const blogs = await blogRepository.getAllBlogs();
    return blogs;
  }

  async getBlogById(id) {
    const blog = await blogRepository.getBlogById(id);
    return blog;
  }

  async createBlog(blog, userId) {
    const newBlog = await blogRepository.createBlog({
      ...blog,
      author: userId,
    });
    return newBlog;
  }

  async updateBlog(id, blog) {
    const updatedBlog = await blogRepository.updateBlog(id, blog);
    return updatedBlog;
  }

  async deleteBlog(id) {
    const deletedBlog = await blogRepository.deleteBlog(id);
    return deletedBlog;
  }
}

export default new blogService();
