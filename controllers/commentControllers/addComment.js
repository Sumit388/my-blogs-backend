// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Post a Comment to the blog
//@route POST /api/comments/:blogId
//@access public
const addCommentToBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;
  const { body, name, userId } = req.body;

  // If invalid blog Id
  if (!isValidObjectId(blogId)) {
    res.status(400);
    throw new Error("Invalid blog ID");
  }

  if (!body || !name || !userId) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const updatedBlog = await blogsModel.findByIdAndUpdate(
    blogId,
    {
      $push: {
        comments: { body, name, userId, likes: [] },
      },
    },
    {
      new: true,
    }
  );

  if (!updatedBlog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json({
    message: "Comment added.",
    data: updatedBlog.comments,
  });
});

module.exports = addCommentToBlog;
