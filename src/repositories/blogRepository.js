import Blog from "../models/blog.model.js";

//Create blog repository class
class blogRepository {
  async getAllBlogs() {
    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    return blogs;
  }

  async getBlogById(id) {
    const blog = await Blog.findById(id).populate("author", "name email");
    return blog;
  }

  async createBlog(blog, userId) {
    const newBlog = await Blog.create(blog);
    return newBlog;
  }

  async updateBlog(id, blog) {
    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, {
      new: true,
    });
    return updatedBlog;
  }

  async deleteBlog(id) {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    return deletedBlog;
  }
}

export default new blogRepository();
