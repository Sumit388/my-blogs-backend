// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const messageModel = require("../../models/messagesModel");

//@desc Send a message to the admin
//@route POST /api/messages
//@access public
const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, body, user_id } = req.body;

  if (!name || !email || !body) {
    res.status(400);
    throw new Error("Name, Email & Body is mandatory!");
  } else {
    await messageModel.create({ name, email, body, user_id });
    res.status(201).json({
      message: "add new contact deatils",
    });
  }
});

module.exports = sendMessage;
