
const { Event } = require("./");

exports.list = () => Event.find().sort({ date: 1 });
exports.create = (e) => Event.create(e);
exports.update = (id, e) => Event.findByIdAndUpdate(id, e, { new: true });
exports.remove = (id) => Event.findByIdAndDelete(id);
