//////// IMPORT ////////
const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

/////// DEFINE VARIABLES ////////
const port = process.env.PORT || 5001;
const app = express();


//////// MIDDLEWARE ////////

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));