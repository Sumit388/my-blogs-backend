// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

const getIndividualBlog = asyncHandler(async (req, res) => {
  // If invalid blog Id
  if (!isValidObjectId(req?.params?.id)) {
    res.status(400);
    throw new Error("Invalid blog ID");
  }

  const fetchedBlog = await blogsModel.findById(req?.params?.id);

  if (!fetchedBlog) {
    res.status(404);
    throw new Error("No contacts found");
  }

  res.status(200).json({
    message: `Found the blog requested`,
    data: fetchedBlog,
  });
});

module.exports = getIndividualBlog;
