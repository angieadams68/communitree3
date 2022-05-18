const db = require('../db')
const { Blog, Comment } = require('../models')

const getBlogs = async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
}

const getComments = async (req, res) => {
  const comments = await Comment.find()
  res.json(comments)

}



const createBlog= async (req, res) => {
  try {
    const storedBlog= await Blog.create(req.body)
    res.json(storedBlog)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

const getBlogById = async (req, res) => {
  try {
    const specificBlog = await Blog.findById(req.params.id)
    res.json(specificBlog)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(blog)
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.send('Post Successfully Deleted')
  } catch (e) {
    console.log(e)
    res.send('Oops! Something went wrong.')
  }
}

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getComments,
}