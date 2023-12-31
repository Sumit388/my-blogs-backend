// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const userModel = require("../../models/userModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Get individual user details
//@route GET /api/users/:id
//@access Public
const getIndividualUserDetails = asyncHandler(async (req, res) => {
  const id = req.params?.id;

  // If invalid user Id
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("Invalid user ID");
  }

  const fetchedUser = await userModel.findById(id);

  if (!fetchedUser) {
    res.status(404);
    throw new Error("User Not found");
  }

  res.status(200).json({ meassage: "User found", data: fetchedUser });
});

module.exports = getIndividualUserDetails;
