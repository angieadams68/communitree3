const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require('mongoose')

// mongoose
//   .connect('mongodb://127.0.0.1:27017/communitreeDatabase')
//   .then(() => {
//     console.log('Successfully connected to MongoDB.')
//   })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   })
// // mongoose.set('debug', true)
// const connectDB = mongoose.connection

// module.exports = connectDB
