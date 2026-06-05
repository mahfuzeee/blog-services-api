import blogService from "../services/blogService.js";
import logger from "../utils/logger.js";

class blogController {
  async createBlog(req, res, next) {
    const { title, content } = req.body;
    try {
      if (!title || !content) {
        throw new Error("Please add all fields");
      }
      const blog = await blogService.createBlog(req.body, req.user._id);
      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: blog,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  }
  async getAllBlogs(req, res, next) {
    try {
      const blogs = await blogService.getAllBlogs();
      res.status(200).json({
        success: true,
        message: "All blogs",
        data: blogs,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  }

  async getBlogById(req, res, next) {
    try {
      const blog = await blogService.getBlogById(req.params.id);
      res.status(200).json({
        success: true,
        message: "Blog found",
        data: blog,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  }

  async updateBlog(req, res) {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Blog updated",
      data: blog,
    });
  }

  async deleteBlog(req, res) {
    const blog = await blogService.deleteBlog(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog deleted",
      data: blog,
    });
  }
}

export default new blogController();
