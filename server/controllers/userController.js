const User = require("../models/users");

exports.getAllUsers = async (req, res) => {
  try {
    const skill = req.query.skill;

    let query = {};

    if (skill) {
      query.skillsOffered = { $regex: skill, $options: "i" };
    }

    const users = await User.find(query).select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this profile" });
    }

    const { name, bio, avatar, location, skillsOffered, skillsWanted } =
      req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        bio,
        avatar,
        location,
        skillsOffered,
        skillsWanted,
      },
      { new: true, runValidators: true },
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
