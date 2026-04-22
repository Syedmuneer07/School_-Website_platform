const { Event } = require("./");

exports.list = () => Event.findAll({ order: [["date", "ASC"]] });
exports.create = (e) => Event.create(e);
exports.update = async (id, e) => {
  const record = await Event.findByPk(id);
  if (!record) return null;
  return record.update(e);
};
exports.remove = (id) => Event.destroy({ where: { id } });
