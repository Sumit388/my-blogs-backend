// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Get all Comments of the blog
//@route GET /api/comments/:blogId
//@access public
const getAllComents = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;

  // If invalid blog Id
  if (!isValidObjectId(blogId)) {
    res.status(400);
    throw new Error("Invalid blog ID");
  }

  const blog = await blogsModel.findById(blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json({
    meassage: "Coments found",
    count: blog.comments.length,
    data: blog.comments,
  });
});

module.exports = getAllComents;
