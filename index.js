const mongoose = require("mongoose");
const { createUser, updateUser, deleteUser } = require("./controls/user");
// connect to server
mongoose
  .connect("mongodb://localhost:27017/social-network", {
    useNewUrlParser: true
  })
  .then(() => console.log("connected to server"))
  .catch(console.log);

// // create a user
// createUser(
//   "minhnhat",
//   "minhnhat123",
//   "minhnhatvdl@gmai.com",
//   "minh nhat",
//   "02-11-1992"
// );

// // update a user
// updateUser(
//   "5c964b7ce8e3fd0d38a6ec6c",
//   "dho",
//   "minhnhatvdl",
//   "minhnhatvdl@gmail.com",
//   "ho dac minh nhat",
//   "18-11-1992"
// );

// // delete a user
// deleteUser("5c95629b2a9b1208f8d617a3");
