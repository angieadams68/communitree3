const db = require('../db')
const { Blog, User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const user = await User.find({
        name: "Jody Joo",
    })
  const blogs = [
    {
      title: 'things about me',
      author: user[0]._id,
      content: 'What a wonderful site',
      comment: []
    },
    {
      title: 'post',
      author: user[0]._id,
      content: 'Nice'
    }
  ]

  await Blog.insertMany(blogs)
  console.log('Created blogs!')
}
const run = async () => {
  await main()
  db.close()
}

run()