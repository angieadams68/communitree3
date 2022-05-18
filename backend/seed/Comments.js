const db = require('../db')
const { Comment, Blog } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const blog = await Blog.find({
        title: "things about me",
    })
  const comments = [
    {
      user: 'jodzs',
      text: 'so cool',
      blog_id: blog[0]._id,
    }
  ]

  await Comment.insertMany(comments)
  console.log('Created comments!')
}
const run = async () => {
  await main()
  db.close()
}

run()