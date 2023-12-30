// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const messageModel = require("../../models/messagesModel");

//@desc Get all messages details
//@route GET /api/messages
//@access ADMIN & EDITOR
const getAllMessages = asyncHandler(async (req, res) => {
  const fetchedMessages = await messageModel.find();

  if (!fetchedMessages) {
    res.status(401);
    throw new Error("Invalid request");
  }

  res.status(200).json({
    meassage: "Users found",
    count: fetchedMessages.length,
    data: fetchedMessages,
  });
});

module.exports = getAllMessages;
