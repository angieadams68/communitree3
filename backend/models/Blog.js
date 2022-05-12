const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text to your post"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
