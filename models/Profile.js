const mongoose = require("mongoose");
const { Schema } = mongoose;
// create a schema profile
const ProfileSchema = new Schema({
  university: { type: [String] },
  major: { type: [String] },
  social: {
    facebook: { type: String },
    instagram: { type: String }
  },
  description: { type: String }
});
// model Profile
const Profile = mongoose.model("Profile", ProfileSchema);
// export
module.exports = {
  ProfileSchema,
  Profile
};
