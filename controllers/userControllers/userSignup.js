// * Packages Import * //
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// * Models Import * //
const userModel = require("../../models/userModel");

//@desc User signup
//@route POST /api/users/register
//@access public
const userSignup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //   If request is invalid or incomplete
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  //   If the email id is already registered
  const fetchedUser = await userModel.findOne({ email });
  if (fetchedUser) {
    res.status(400);
    throw new Error("User already exist");
  }

  //   Registering the new user here
  const hashedPassword = await bcrypt.hash(password, 10);
  const generatedUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //   If the user registration fails in the DB.
  if (!generatedUser) {
    res.status(400);
    throw new Error("User data not valid");
  }

  res.status(201).json({
    message: "User registered successfully. Please login to continue",
  });
});

module.exports = userSignup;
