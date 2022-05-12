//////// IMPORT ///////
const asyncHandler = require("express-async-handler");
const Blog = require("../models/Blog");
const User = require('../models/User')



//// GET BLOG ////
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id });

  res.status(200).json(blogs);
});

//// CREATE BLOG ////
const createBlog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  const blog = await Blog.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(blog);
});

//// UPDATE BLOG ////
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }

  // const user = await User.findById(req.user.id) 

 //checking for user//
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

//making sure logged in user is matching the blog user//
  if (blog.user.toString() !== req.user.id) {
 res.status(401)
 throw new Error('User not authorized')
  }

  const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateBlog);
});


//// DELETE BLOG ////
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }

  // const user = await User.findById(req.user.id) 


 //checking for user//
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
//making sure logged in user is matching the blog user//
  if (blog.user.toString() !== req.user.id) {
 res.status(401)
 throw new Error('User not authorized')
  }

  await blog.remove();

  res.status(200).json({ id: req.params.id });
});

///// EXPORTING MODULES /////

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
