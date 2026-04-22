const { Achievement } = require("./");

exports.list = () => Achievement.findAll({ order: [["id", "DESC"]] });
exports.create = (a) => Achievement.create(a);
exports.update = async (id, a) => {
  const record = await Achievement.findByPk(id);
  if (!record) return null;
  return record.update(a);
};
exports.remove = (id) => Achievement.destroy({ where: { id } });
