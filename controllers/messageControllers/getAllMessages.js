// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const messageModel = require("../../models/messagesModel");

//@desc Get all messages details
//@route GET /api/messages
//@access ADMIN
//@filters search by: name || email || id , sort by: lastest || oldest
const getAllMessages = asyncHandler(async (req, res) => {
  // Extract query parameters from the request
  const { name, email, id, sortBy } = req.query;

  // Build the filter object based on the provided parameters
  const filter = {};
  if (name) filter.name = new RegExp(name, "i"); // Case-insensitive name search
  if (email) filter.email = new RegExp(email, "i"); // Case-insensitive email search
  if (id) filter.user_id = id;

  // Build the sort object based on the provided sortBy parameter
  const sort = {};
  if (sortBy === "latest") sort.createdAt = -1; // Sort by latest to oldest
  if (sortBy === "oldest") sort.createdAt = 1; // Sort by oldest to latest

  // Fetch messages based on the filter and sort criteria
  const fetchedMessages = await messageModel.find(filter).sort(sort);

  if (!fetchedMessages) {
    res.status(401);
    throw new Error("Invalid request");
  }

  res.status(200).json({
    message: "Messages found",
    count: fetchedMessages.length,
    data: fetchedMessages,
  });
});

module.exports = getAllMessages;
