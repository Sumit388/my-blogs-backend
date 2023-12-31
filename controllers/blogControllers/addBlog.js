// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

//@desc Upload a blog
//@route POST /api/blogs
//@access ADMIN & EDITOR
const addBlog = asyncHandler(async (req, res) => {
  const { author, image_url1, image_url2, body, category, tags } = req.body;

  if (!author || !author) {
    res.status(400);
    throw new Error("Author name, Body is mandatory!");
  }
  await messageModel.create({
    author,
    image_url1,
    image_url2,
    body,
    category,
    tags,
  });
  res.status(201).json({
    message: "added new blog",
  });
});

module.exports = addBlog;
