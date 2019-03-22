const mongoose = require("mongoose");
const { Schema } = mongoose;
// create a schema group
const GroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
// model Group
const Group = mongoose.model("Group", GroupSchema);
// export
module.exports({
  GroupSchema,
  Group
});
