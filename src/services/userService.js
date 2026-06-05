import userRepository from "../repositories/userRepository.js";

class userService {
  async createUser(name, email, password) {
    return await userRepository.createUser(name, email, password);
  }

  async getUserByEmail(email) {
    return await userRepository.getUserByEmail(email);
  }

  async login(email, password) {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    return user;
  }
}

export default new userService();
