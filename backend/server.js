//////// IMPORT ////////
const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware')


/////// DEFINE VARIABLES ////////
const port = process.env.PORT || 5000;
const app = express();

//////// MIDDLEWARE ////////

app.use(express,json())

app.use(express.urlendcoded({ extended: false }))

app.use('/api/goals', require('./routes/blogRoutes'))

app.use(errorHandler)


//////// PORT LISTENING ////////
app.listen(port, () => console.log(`Server started on port ${port}`));
