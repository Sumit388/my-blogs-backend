const mongoose = require("mongoose");

const allowedValues = ["value1", "value2", "value3"];

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, "Comment should have a body"],
    },
    name: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Comment should have a userId"],
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const blogSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Blogs should contain an Author"],
    },
    image_url1: {
      type: String,
    },
    image_url2: {
      type: String,
    },
    body: {
      type: String,
      required: [true, "Blogs should have a proper body"],
    },
    category: {
      type: [
        {
          type: String,
          enum: {
            values: allowedValues,
            message:
              "Invalid value.Catagory Must be one of: " +
              allowedValues.join(", "),
          },
        },
      ],
      required: [true, "Blogs should have a proper catagory"],
    },
    tags: {
      type: [String],
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
