
const { Alumni } = require("./");

exports.list = () => Alumni.find().sort({ _id: -1 });
exports.create = (a) => Alumni.create(a);
exports.update = async (id, a) => {
  return Alumni.findByIdAndUpdate(id, a, { new: true });
};
exports.remove = (id) => Alumni.findByIdAndDelete(id);

