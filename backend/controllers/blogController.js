//////// IMPORT ///////
const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModel')


const getBlogs = asyncHandler(async (req, res) => {
const blogs = await Blog.find()


  res.status(200).json(blogs);
});

const createBlog = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add text field")
  };

  const blog = await Blog.create({
      text: req.body.text
  })

  res.status(200).json(blog)
})

  const updateBlog = asyncHandler(async (req, res) => {
      const blog = await Blog.findById(req.params.id)

      if (!blog) {
          res.status(400)
          throw new Error('Blog not found')
      }

     const updateBlog = await Blog.findOneAndUpdate(req.params.id, req.body, {
         new: true,
     } )

    res.status(200).json(updateBlog);
  });

  const deleteBlog = asyncHandler(async (req, res) => {
      const blog = await Blog.findById(req.params.id)

      if (!blog) {
          res.status(400)
          throw new Error('Blog not found')
      }

     await blog.remove()

    res.status(200).json({ id: req.params.id });
  });

  






module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}