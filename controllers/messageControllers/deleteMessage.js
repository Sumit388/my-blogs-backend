// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const messageModel = require("../../models/messagesModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc delete a message
//@route DELETE /api/messages/:id
//@access ADMIN
const deleteMessage = asyncHandler(async (req, res) => {
  const id = req.params?.id;

  // If invalid message Id
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("Invalid message ID");
  }

  const fetchedMessage = await messageModel.findById(id);

  // If user is not present
  if (!fetchedMessage) {
    res.status(404);
    throw new Error("Message Not found");
  }

  await messageModel.findByIdAndDelete(id);

  res.status(200).json({
    message: `deleted message with id: ${req.params.id}`,
  });
});

module.exports = deleteMessage;
