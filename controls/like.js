const { Post } = require("../models/Post");
const { Like } = require("../models/Like");
// like or dislike a post
exports.likePost = async (postId, userId) => {
  try {
    const post = await Post.findOne({_id: postId});
    if(!post) throw new Error("post is not found");
    if(post.likes.length > 0) {
      // get list user liked
      const arrUserIdLiked = post.likes.map(e => e.userId.toString());
      const index = arrUserIdLiked.indexOf(userId);
      if(index === -1) {
        // like
        const like = new Like({userId});
        post.likes = [...post.likes, like];
      } else {
        // dislike
        post.likes.splice(index, 1);
      }
    } else {
      // like
      const like = new Like({userId});
      post.likes = [like];
    }
    const result = await post.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

