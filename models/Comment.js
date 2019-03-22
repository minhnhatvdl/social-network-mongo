const mongoose = require("mongoose");
const { Schema } = mongoose;
// create a schema comment
const CommentSchema = new Schema({
  commnent: { type: String, required: true },
  createdDate: { type: Date, default: new Date().getDate() },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
// model Comment
const Comment = mongoose.model("Comment", CommentSchema);
// export
module.exports({
  CommentSchema,
  Comment
});
