const mongoose = require("mongoose");

const messagesSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add your name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email id"],
    },
    body: {
      type: String,
      required: [true, "PLease add avalid message"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", messagesSchema);
