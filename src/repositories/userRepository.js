import User from "../models/user.model.js";

//Create User repository class

class userRepository {
  async createUser(name, email, password) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }
}

export default new userRepository();
