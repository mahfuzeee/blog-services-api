import express from "express";
import userController from "../controllers/userController.js";
import protect from "../middlewares/protect.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", protect, userController.getMe);
router.post("/logout", userController.logout);

export default router;
