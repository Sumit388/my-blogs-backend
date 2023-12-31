// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const blogsModel = require("../../models/blogsModel");

//@desc Get all blogs
//@route GET /api/blogs
//@access public
//@filters search by: authorName || category || tags ,
//          sort by: lastest || oldest || popularity

const getAllBlogs = asyncHandler(async (req, res) => {
  // Extract query parameters from the request
  const { authorName, category, tags, sortBy } = req.query;

  // Build the filter object based on the provided parameters
  const filter = {};
  if (authorName) {
    filter["author.name"] = new RegExp(authorName, "i");
  }
  if (category) filter.catagory = category;
  if (tags) filter.tags = { $all: tags.split(",") };

  // Build the sort object based on the provided sortBy parameter
  let sort = {};
  if (sortBy === "latest") sort.createdAt = -1;
  if (sortBy === "oldest") sort.createdAt = 1;
  if (sortBy === "popularity") sort = { commentsCount: -1 };

  // Fetch blogs based on the filter and sort criteria
  const fetchedBlogs = await blogsModel
    .aggregate([
      { $match: filter },
      {
        $addFields: {
          // Count the number of comments
          commentsCount: { $size: "$comments" },
        },
      },
      { $sort: sort },
    ])
    .exec();

  res.status(200).json({
    message: "Blogs found",
    count: fetchedBlogs.length,
    data: fetchedBlogs,
  });
});

module.exports = getAllBlogs;
