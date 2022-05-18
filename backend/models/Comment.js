//// ADDING A COMMENT ////

const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: {
      type: String, required: true,
    },
    text: {
      type: String,
      required: [true, "Please add text to your post"],
    },
    blog_id: { type: Schema.Types.ObjectId, ref: "blog" },
  },
  {
    timestamps: true,
  }
);

module.exports = commentSchema
