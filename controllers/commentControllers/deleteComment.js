// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Delete a Comment from the blog
//@route DELETE /api/comments/:blogId/:commentId/:userId
//@access ADMIN, EDITOR, User to which this comment belongs
const deleteCommentFromBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;
  const commentId = req.params.commentId;

  // If invalid blog or comment Id
  if (!isValidObjectId(blogId) || !isValidObjectId(commentId)) {
    res.status(400);
    throw new Error("Invalid blog or comment ID");
  }

  const updatedBlog = await blogsModel.findByIdAndUpdate(
    blogId,
    {
      $pull: {
        comments: { _id: commentId },
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
    message: "Comment deleted.",
    data: updatedBlog.comments,
  });
});

module.exports = deleteCommentFromBlog;
