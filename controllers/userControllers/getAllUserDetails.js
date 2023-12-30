// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const userModel = require("../../models/userModel");

//@desc Get all user details
//@route GET /api/users
//@access ADMIN
const getAllUserDetails = asyncHandler(async (req, res) => {
  const fetchedUsers = await userModel.find();

  if (!fetchedUsers) {
    res.status(401);
    throw new Error("Invalid request");
  }

  res.status(200).json({
    meassage: "Users found",
    count: fetchedUsers.length,
    data: fetchedUsers,
  });
});

module.exports = getAllUserDetails;
