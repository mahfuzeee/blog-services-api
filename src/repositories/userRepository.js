import User from "../models/user.model.js";

//Create User repository class

class userRepository {
  async createUser(name, email, password) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ email }).select("+password");
    return user;
  }

  async getUserById(id) {
    const user = await User.findById(id);
    return user;
  }
}

export default new userRepository();
