//////// IMPORT ////////
const express = require("express");
const cors = require('cors')
const logger = require('morgan')
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const db = require('./db')
const crudController = require('./controllers/crudController')


/////// DEFINE VARIABLES ////////
const port = process.env.PORT || 3001;
const app = express();


//////// MIDDLEWARE ////////

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))

app.use(errorHandler)



////// ROUTES //////


//------------GET BLOGS----------------//

app.get('/api/allblogs', crudController.getBlogs)

app.get('/api/comments', crudController.getComments)


//------------CREATE BLOGS----------------//

app.post("/api/new",crudController.createBlog)

app.post('/api/new/comment/:id', crudController.createComment)
app.get('/api/comments/:blog', crudController.findBlogComments)


//------------POST BY ID----------------//

app.get("/api/blog/:id", crudController.getBlogById)

//------------UPDATE BLOGS----------------//

app.put('/api/posts/:id',crudController.updateBlog)

//------------DELETE BLOGS----------------//

app.delete('/api/delete/posts/:id',crudController.deleteBlog)

//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));
