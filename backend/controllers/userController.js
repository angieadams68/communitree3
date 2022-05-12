const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

//// REGISTER NEW USER ////

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;

  if (!name || !email || !password || !username) {
    res.status(400);
    throw new Error("Please fill out the form");
  }

  //// DO THEY HAVE AN ACCOUNT ALREADY? ////
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already has account");
  }

  //// HASH PASSWORD ////
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //// CREATE THE USER ////
  const user = await User.create({
    name,
    email,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data Information");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //// CHECK FOR USER EMAIL (LOGIN) ////
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

//// GENERATE JWT ////
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

module.exports = {
  registerUser,
};
