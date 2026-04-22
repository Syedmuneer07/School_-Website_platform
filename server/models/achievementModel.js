const { Achievement } = require("./");

exports.list = () => Achievement.find().sort({ _id: -1 });
exports.create = (a) => Achievement.create(a);
exports.update = (id, a) => Achievement.findByIdAndUpdate(id, a, { new: true });
exports.remove = (id) => Achievement.findByIdAndDelete(id);
