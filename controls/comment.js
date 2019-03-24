const { Comment } = require("../models/Comment");
// create a comment
exports.createComment = async (postId, userId, comment) => {
  try {
    const newComment = new Comment({ comment, postId, userId });
    const result = await newComment.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update a comment
exports.updateComment = async (commentId, comment) => {
  try {
    const result = await Comment.updateOne(
      { _id: commentId },
      {
        $set: {
          comment
        }
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// delete a comment
exports.deleteComment = async commentId => {
  try {
    const result = await Comment.deleteOne({ _id: commentId });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
