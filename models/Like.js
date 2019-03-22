const mongoose = require("mongoose");
const { Schema } = mongoose;
// create a schema like
const LikeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
// model Like
const Like = mongoose.model("Like", LikeSchema);
// export
module.exports({
  LikeSchema,
  Like
});
