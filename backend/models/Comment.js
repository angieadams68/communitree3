//// ADDING A COMMENT ////

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: [true, "Please add text to your post"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = commentSchema;
