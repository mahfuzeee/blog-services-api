import userService from "../services/userService.js";
import logger from "../utils/logger.js";
import { generateToken, verifyToken } from "../utils/jwt.js";

class userController {
  async register(req, res) {
    const { name, email, password } = req.body;

    try {
      if (!name || !email || !password) {
        throw new Error("Please add all fields");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      const existingUser = await userService.getUserByEmail(email);
      if (existingUser) {
        throw new Error("User already exists");
      }
      const user = await userService.createUser(name, email, password);
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      logger.error(error);
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw new Error("Please add all fields");
      }
      const user = await userService.login(email, password);
      const token = generateToken(user);
      res.status(200).json({
        success: true,
        message: "Login successful",
        user,
        token,
      });
    } catch (error) {
      logger.error(error);
      res.status(400).json({ error: error.message });
    }
  }

  async getMe(req, res) {
    try {
      const user = await userService.getUserByEmail(req.user.email);
      res.status(200).json(user);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ error: error.message });
    }
  }

  async logout(req, res) {
    try {
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      logger.error(error);
      res.status(400).json({ error: error.message });
    }
  }
}

export default new userController();
