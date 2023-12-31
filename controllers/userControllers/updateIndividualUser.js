// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Models Import * //
const userModel = require("../../models/userModel");

// * Utils Import * //
const { isValidObjectId } = require("../../utils/mongooseUtils");

//@desc Update individual user details
//@route PATCH /api/users/:id
//@access ADMIN, EDITOR, user to which this entry belongs.
const updateIndividualUser = asyncHandler(async (req, res) => {
  const body = req?.body;
  const id = req.params?.id;

  // If invalid user Id
  if (!isValidObjectId(id)) {
    res.status(400);
    throw new Error("Invalid user ID");
  }

  const fetchedUser = await userModel.findById(id);

  // If user is not present
  if (!fetchedUser) {
    res.status(404);
    throw new Error("User Not found");
  }

  // Check for empty body
  if (Object.keys(body).length === 0) {
    res.status(400);
    return next(new Error("Request body is empty"));
  }

  // Only Admin can update user role
  if (req.user.user_role !== "ADMIN" && "user_role" in body) {
    res.status(401);
    return next(new Error("You are not Authorized to update user role"));
  }

  await userModel.findByIdAndUpdate(id, req.body, {
    new: false,
  });

  res.status(200).json({
    message: `update user details for ${req.params.id}`,
  });
});

module.exports = updateIndividualUser;
