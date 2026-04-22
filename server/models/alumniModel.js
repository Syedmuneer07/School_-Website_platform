const { Alumni } = require("./");

exports.list = () => Alumni.findAll({ order: [["id", "DESC"]] });
exports.create = (a) => Alumni.create(a);
exports.update = async (id, a) => {
  const record = await Alumni.findByPk(id);
  if (!record) return null;
  return record.update(a);
};
exports.remove = (id) => Alumni.destroy({ where: { id } });

