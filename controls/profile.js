const { Profile } = require("../models/Profile");
const { User } = require("../models/User");
// create a profile
exports.createProfile = async (
  userId,
  university,
  major,
  social,
  description
) => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error("user is not found");
    if (user.profile) throw new Error("profile exist");
    const newProfile = new Profile({ university, major, social, description });
    user.profile = newProfile;
    const result = await user.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update a profile
exports.updateProfile = async (
  userId,
  university,
  major,
  social,
  description
) => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error("user is not found");
    if (!user.profile) throw new Error("profile doesn't exist");
    const profileUpdate = new Profile({
      university,
      major,
      social,
      description
    });
    user.profile = profileUpdate;
    const result = await user.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// delete a profile
exports.deleteProfile = async userId => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error("user is not found");
    if (!user.profile) throw new Error("profile doesn't exist");
    user.profile = null;
    const result = await user.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
