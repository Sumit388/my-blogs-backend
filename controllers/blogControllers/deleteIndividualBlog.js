// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc delete individual blog details
//@route DELETE /api/blogs/:id
//@access ADMIN, EDITOR
const deleteIndividualBlog = asyncHandler(async (req, res) => {
  const id = req.params?.id;

  // If invalid blog Id
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("Invalid blog ID");
  }

  const fetchedBlog = await blogsModel.findById(id);

  // If blog is not present
  if (!fetchedBlog) {
    res.status(404);
    throw new Error("User Not found");
  }

  await blogsModel.findByIdAndDelete(id);

  res.status(200).json({
    message: `deleted blog details for ${req.params.id}`,
  });
});

module.exports = deleteIndividualBlog;
