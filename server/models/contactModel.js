const { Contact } = require("./");

exports.list = () => Contact.findAll({ order: [["id", "DESC"]] });
exports.create = (c) => Contact.create(c);
exports.update = async (id, c) => {
  const record = await Contact.findByPk(id);
  if (!record) return null;
  return record.update(c);
};
exports.remove = (id) => Contact.destroy({ where: { id } });
