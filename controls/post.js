const { Post } = require("../models/Post");
// create a post
exports.createPost = async (title, content, userId, likes) => {
  try {
    const newPost = new Post({ title, content, userId, likes });
    const result = await newPost.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update a post
exports.updatePost = async (postId, title, content, likes) => {
  try {
    const result = await Post.updateOne(
      { _id: postId },
      {
        $set: {
          title,
          content,
          likes
        }
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// delete a post
exports.deletePost = async postId => {
  try {
    const result = await Post.deleteOne({ _id: postId });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
