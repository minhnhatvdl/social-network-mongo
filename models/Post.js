const mongoose = require("mongoose");
const { Schema } = mongoose;
// import Like
const { LikeSchema } =  require("./Like");
// create a schema post
const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  likes: { type: LikeSchema },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
// model Post
const Post = mongoose.model("Post", PostSchema);
// export
module.exports = {
  PostSchema,
  Post
};
