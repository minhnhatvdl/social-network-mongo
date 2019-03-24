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
// like
const { likePost } = require("./controls/like");
// comment
const {
  createComment,
  updateComment,
  deleteComment
} = require("./controls/comment");
const { Comment } = require("./models/Comment");
// group
const { createGroup, addUserInGroup } = require("./controls/group");
const { Group } = require("./models/Group");
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

// Post.find({userId: "5c96a2b08df28d148703c3ed"})
//   .populate("userId", { username: 1, _id: 0 })
//   .then(console.log)
//   .catch(console.log);

// // like and dislike
// likePost("5c96a3d772708a153248b912", "5c96a2b08df28d148703c3ee");

// // like and dislike
// likePost("5c96a3d772708a153248b912", "5c96a2b08df28d148703c3ed");

// // query like
// Post.find({}, { _id: 0, title: 1, likes: 1 })
//   .populate("userId", { _id: 0, username: 1 })
//   .populate("likes.userId", {_id: 0, username: 1})
//   .then(result => console.log(JSON.stringify(result, undefined, 2)))
//   .catch(console.log);

// // create a comment
// createComment("5c96a3d772708a153248b912", "5c964b7ce8e3fd0d38a6ec6c", "We won");

// // create a comment
// createComment("5c96a3d772708a153248b912", "5c96a2b08df28d148703c3ed", "We won");

// // update a comment
// updateComment("5c97d64ad1c9652708c039af", "That is so great");

// // delete a comment
// deleteComment("5c97d4d41a7f73250b5f8b7d");

// // query comment
// const getComment = async () => {
//   const comments = await Comment.aggregate([
//     {
//       $group: {
//         _id: "$postId",
//         comments: { $push: "$comment" },
//         postId: { $push: "$postId" }
//       }
//     }
//   ]);
//   const result = await Comment.populate(comments, {
//     path: "postId",
//     select: "title -_id"
//   });
//   console.log(result);
// };

// getComment();

// // create a group
// createGroup("MongoDb", "Share and study");

// // add a user in a group
// addUserInGroup("5c964b7ce8e3fd0d38a6ec6c", "5c97eba403a4052ea2c24df7");
