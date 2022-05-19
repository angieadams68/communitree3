const { Schema } = require('mongoose')
const mongoose = require("mongoose");
 const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  },
  { timestamps: true }
)

module.exports = blogSchema
