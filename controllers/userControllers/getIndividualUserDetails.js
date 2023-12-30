// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const userModel = require("../../models/userModel");

//@desc Get individual user details
//@route GET /api/users/:id
//@access Public
const getIndividualUserDetails = asyncHandler(async (req, res) => {
  const id = req.params?.id;
  const fetchedUser = await userModel.findById(id);

  if (!fetchedUser) {
    res.status(404);
    throw new Error("User Not found");
  }

  res.status(200).json({ meassage: "User found", data: fetchedUser });
});

module.exports = getIndividualUserDetails;
