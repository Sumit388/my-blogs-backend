// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Update individual blog details
//@route PATCH /api/blogs/:id
//@access ADMIN, EDITOR
const updateIndividualBlog = asyncHandler(async (req, res) => {
  const body = req?.body;
  const id = req.params?.id;

  // If invalid blog Id
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("Invalid blog ID");
  }

  const fetchedBlog = await blogsModel.findById(id);

  // If user is not present
  if (!fetchedBlog) {
    res.status(404);
    throw new Error("Blog Not found");
  }

  // Check for empty body
  if (Object.keys(body).length === 0) {
    res.status(400);
    return next(new Error("Request body is empty"));
  }

  await blogsModel.findByIdAndUpdate(id, req.body, {
    new: false,
  });

  res.status(200).json({
    message: `update user details for ${req.params.id}`,
  });
});

module.exports = updateIndividualBlog;
