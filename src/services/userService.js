import userRepository from "../repositories/userRepository.js";

class userService {
  async createUser(name, email, password) {
    return await userRepository.createUser(name, email, password);
  }

  async getUserByEmail(email) {
    return await userRepository.getUserByEmail(email);
  }
}

export default new userService();
