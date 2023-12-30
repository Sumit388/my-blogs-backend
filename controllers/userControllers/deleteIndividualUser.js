// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const userModel = require("../../models/userModel");

//@desc delete individual user details
//@route DELETE /api/users/:id
//@access ADMIN, EDITOR, user to which this entry belongs.
const deleteIndividualUser = asyncHandler(async (req, res) => {
  const id = req.params?.id;
  const fetchedUser = await userModel.findById(id);

  // If user is not present
  if (!fetchedUser) {
    res.status(404);
    throw new Error("User Not found");
  }

  await userModel.findByIdAndDelete(id);

  res.status(200).json({
    message: `deleted user details for ${req.params.id}`,
  });
});

module.exports = deleteIndividualUser;
