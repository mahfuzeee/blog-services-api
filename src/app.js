import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);
// app.use("/api/blogs", blogRoutes);

export default app;
