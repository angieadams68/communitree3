const db = require("../db");
const { User } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const user = [
    {
      name: "Jody Joo",
      email: "jodyjoo@gmail.com",
      username: "jodz",
      password: "1234",
    },
  ];

  await User.insertMany(user);
  console.log("Created users!");
};
const run = async () => {
  await main();
  db.close();
};

run();
