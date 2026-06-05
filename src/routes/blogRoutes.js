class blogRoutes {
  async getBlogs(req, res) {
    res.send("Blogs");
  }
}

export default new blogRoutes();
