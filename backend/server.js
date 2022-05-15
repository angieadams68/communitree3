//////// IMPORT ////////
const express = require("express");
const cors = require('cors')
const logger = require('morgan')
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const db = require('./db')
const crudController = require('./controllers/crudController')

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

app.use(errorHandler)



////// ROUTES //////

app.get('/allblogs', crudController.getBlogs)

//------------GET BLOGS----------------//

// app.use('/api/blogs', blog)
app.get("/api/blogs/:userId",getBlogs)

//------------CREATE BLOGS----------------//

app.post("/new", crudController.createBlog)
// app.use('/api/users', require('./routes/userRoutes'))

//------------POST BY ID----------------//

app.get("/blog/:id", crudController.getBlogById)

//------------UPDATE BLOGS----------------//

app.put('/posts/:id', crudController.updateBlog)

//------------DELETE BLOGS----------------//

app.delete('/delete/posts/:id', crudController.deleteBlog)

//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));
