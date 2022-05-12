

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your Name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your Email"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Please enter a Username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a Password"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
