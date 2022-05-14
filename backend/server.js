//////// IMPORT ////////
const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const blog = require('./routes/blogRoutes')
connectDB()
const {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
  } = require("./controllers/blogController");
/////// DEFINE VARIABLES ////////
const port = process.env.PORT || 5001;
const app = express();


//////// MIDDLEWARE ////////

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.get("/api/blogs/:userId",getBlogs)
// app.use('/api/blogs', blog)
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));
