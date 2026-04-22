const { Result } = require("./");

exports.findByRoll = (roll) => Result.findAll({ where: { roll_number: roll }, order: [["subject", "ASC"]] });
exports.create = (r) => Result.create(r);
exports.list = () => Result.findAll({ order: [["id", "DESC"]] });
exports.update = async (id, r) => {
  const record = await Result.findByPk(id);
  if (!record) return null;
  return record.update(r);
};
exports.remove = (id) => Result.destroy({ where: { id } });
