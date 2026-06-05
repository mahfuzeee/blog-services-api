import mongoose from "mongoose";

//Create a schema for blog
const blogSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    content: {
      type: String,
      required: [true, "Please add a content"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
