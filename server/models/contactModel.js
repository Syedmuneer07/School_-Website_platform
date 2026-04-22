
const { Contact } = require("./");

exports.list = () => Contact.find().sort({ _id: -1 });
exports.create = (c) => Contact.create(c);
exports.update = (id, c) => Contact.findByIdAndUpdate(id, c, { new: true });
exports.remove = (id) => Contact.findByIdAndDelete(id);
