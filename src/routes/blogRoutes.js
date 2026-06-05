import express from "express";
import blogController from "../controllers/blogController.js";
import protect from "../middlewares/protect.js";

const router = express.Router();

router.post("/", protect, blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.put("/:id", protect, blogController.updateBlog);
router.delete("/:id", protect, blogController.deleteBlog);

export default router;
