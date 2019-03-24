const { User } = require("../models/User");
const { Group } = require("../models/Group");
// create a group
exports.createGroup = async (name, description) => {
  try {
    const newGroup = new Group({ name, description });
    const result = await newGroup.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update a group
exports.updateGroup = async (groupId, name, description) => {
  try {
    const result = await Group.updateOne(
      { _id: groupId },
      {
        $set: {
          name,
          description
        }
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// delete a group
exports.deleteGroup = async groupId => {
  try {
    const result = await Group.deleteOne({ _id: groupId });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// add a user into a group
exports.addUserInGroup = async (userId, groupId) => {
  try {
    // check user
    const user = await User.findOne({ _id: userId });
    if (!user) throw new Error("user doesn't exist");
    // check group
    const group = await Group.findOne({ _id: groupId });
    if (!group) throw new Error("group doesn't exist");
    // add a user into a group
    if (group.userIds && group.userIds.length > 0) {
      // group has users
      const arrUserId = group.userIds.map(e => e._id.toString());
      if (arrUserId.indexOf(userId) === -1) {
        group.userIds = [...group.userIds, userId];
      } else {
        throw new Error("user added into this group");
      }
    } else {
      // group has no user
      group.userIds = [userId];
    }
    const resultGroup = await group.save();
    console.log(resultGroup);

    // add a group into a user
    if (user.groupIds && user.groupIds.length > 0) {
        // user has groups
        const arrGroupId = user.groupIds.map(e => e._id.toString());
        if (arrGroupId.indexOf(groupId) === -1) {
          user.groupIds = [...user.groupIds, groupId];
        } else {
          throw new Error("user added into this group");
        }
      } else {
        // user has no group
        user.groupIds = [groupId];
      }
      const resultUser = await user.save();
      console.log(resultUser);
  } catch (error) {
    console.log(error);
  }
};
