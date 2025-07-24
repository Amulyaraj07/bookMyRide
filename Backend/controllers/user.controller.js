const user = require("../models/user.model");

const userService = require("../services/user.service");

module.exports.registeruser = async (req, res, next) => {
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
};
