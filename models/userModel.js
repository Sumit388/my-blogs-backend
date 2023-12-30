const mongoose = require("mongoose");

const userRoles = ["USER", "ADMIN", "EDITOR"];

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide valid user name"],
    },
    email: {
      type: String,
      required: [true, "Please provide valid Emial Id"],
      unique: [true, "Email address aleady taken."],
    },
    password: {
      type: String,
      required: [true, "Please provide valid password"],
    },
    user_role: {
      type: String,
      enum: {
        values: userRoles,
        message: "Invalid role. Must be one of: USER, ADMIN, EDITOR",
      },
      default: "USER",
    },
    phone: {
      type: String,
    },
    about: {
      type: String,
    },
    address: {
      type: String,
    },
    birth_date: {
      type: Date,
      default: Date.now, // Default value for the 'birthDate' field (current date and time)
    },
    contact_link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
