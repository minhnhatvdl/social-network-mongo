const mongoose = require("mongoose");
const { Schema } = mongoose;
// import Profile
const { ProfileSchema, Profile } = require("./Profile");
// create a schema user
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  registerDate: { type: Date, default: Date.now },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group"
  },
  profile: { type: ProfileSchema }
});
// model User
const User = mongoose.model("User", UserSchema);
// export
module.exports = {
  UserSchema,
  User
};
