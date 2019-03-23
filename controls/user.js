const { User } = require("../models/User");
// create a user
exports.createUser = async (
  username,
  password,
  email,
  name,
  dateOfBirth,
  registerDate,
  groupId,
  profile
) => {
  try {
    // verify username and email
    const user = await User.findOne({
      $or: [{ username }, { email }]
    });
    if (user) throw new Error("user exist");
    // create a new user
    const newUser = new User({
      username,
      password,
      email,
      name,
      dateOfBirth,
      registerDate,
      groupId,
      profile
    });
    const result = await newUser.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update a user
exports.updateUser = async (
  userId,
  username,
  password,
  email,
  name,
  dateOfBirth,
  registerDate,
  groupId,
  profile
) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          username,
          password,
          email,
          name,
          dateOfBirth: new Date(
            dateOfBirth
              .split("-")
              .reverse()
              .join("-")
          )
        }
      }
    );
    if (result) console.log("user is updated");
    else console.log("user is not found");
  } catch (error) {
    console.log(error);
  }
};

// delete a user
exports.deleteUser = async userId => {
  try {
    const result = await User.findOneAndDelete({ _id: userId });
    if (result) console.log("user is deleted");
    else console.log("user is not found");
  } catch (error) {
    console.log(error);
  }
};
