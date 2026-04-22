
const { Result } = require("./");

exports.findByRoll = (roll) => Result.find({ roll_number: roll }).sort({ subject: 1 });
exports.create = (r) => Result.create(r);
exports.list = () => Result.find().sort({ _id: -1 });
exports.update = (id, r) => Result.findByIdAndUpdate(id, r, { new: true });
exports.remove = (id) => Result.findByIdAndDelete(id);
