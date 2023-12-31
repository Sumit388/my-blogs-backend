// * Packages Import * //
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// * Models Import * //
const userModel = require("../../models/userModel");

//@desc User login
//@route POST /api/users/login
//@access public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   If any of the fields are empty
  if (!email || !password) {
    res.status(400);
    throw new Error("All fileds are mandatory.");
  }
  const fetchedUser = await userModel.findOne({ email });

  //   If the emial or the password is invalid
  if (!fetchedUser || !(await bcrypt.compare(password, fetchedUser.password))) {
    res.status(400);
    throw new Error("Email or password Invalid.");
  }

  // If everything is valid
  const token = jwt.sign(
    {
      user: {
        name: fetchedUser.name,
        id: fetchedUser.id,
        email: fetchedUser.email,
        user_role: fetchedUser.user_role,
      },
    },
    process.env.SECERET_KEY,
    { expiresIn: "60m" }
  );
  res
    .status(200)
    .cookie("auth_token", token)
    .cookie("user_role", fetchedUser.user_role)
    .json({ message: "Login Succesfull" });
});

module.exports = userLogin;
