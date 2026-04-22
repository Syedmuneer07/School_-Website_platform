const { User } = require("./");

exports.findByUsername = (username) => User.findOne({ where: { username } });
