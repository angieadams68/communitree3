//////// IMPORT ////////
const express = require("express");
const cors = require('cors')
const logger = require('morgan')
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
app.use(cors())
app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))


// app.use('/api/blogs', blog)
app.get("/api/blogs/:userId",getBlogs)

app.post("/")
// app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));
