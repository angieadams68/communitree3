const mongoose = require('mongoose')
const UserSchema = require('./User')
const BlogSchema = require('./Blog')
const CommentSchema = require('./Comment')

const User = mongoose.model('User', UserSchema)
const Blog = mongoose.model('Blog', BlogSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  User,
  Blog,
  Comment
}