class userRoutes {
  async getUsers(req, res) {
    res.send("Users");
  }
}

export default new userRoutes();
