const mongoose = require("mongoose");
// user
const { createUser, updateUser, deleteUser } = require("./controls/user");
// profile
const {
  createProfile,
  updateProfile,
  deleteProfile
} = require("./controls/profile");
// post
const { createPost, updatePost, deletePost } = require("./controls/post");
const { Post } = require("./models/Post");
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

// // create a profile
// createProfile(
//   "5c964b7ce8e3fd0d38a6ec6c",
//   ["INSA Center Val de Loire"],
//   ["Web", "Mobile"],
//   { facebook: "minhnhatvdl", instagram: null },
//   "It is not over"
// );

// // update a profile
// updateProfile(
//   "5c964b7ce8e3fd0d38a6ec6c",
//   ["INSA Center Val de Loire"],
//   ["Web", "Mobile", "Node"],
//   { facebook: "minhnhat", instagram: "minhnhatvdl" },
//   "Life is hard"
// );

// // delete a profile
// deleteProfile("5c964b7ce8e3fd0d38a6ec6c");

// // create a post
// createPost("Movie", "End game", "5c96a2b08df28d148703c3ed");

// // update a post
// updatePost("5c96a3d772708a153248b912", "Sport", "Vietnam - Indo");

Post.find({userId: "5c96a2b08df28d148703c3ed"})
  .populate("userId", { username: 1, _id: 0 })
  .then(console.log)
  .catch(console.log);
