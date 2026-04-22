const M = require("../models/eventModel");
exports.list = async (_q, r, n) => {
  try {
    r.json(await M.list());
  } catch (e) {
    n(e);
  }
};
exports.create = async (q, r, n) => {
  try {
    r.status(201).json(await M.create(q.body));
  } catch (e) {
    n(e);
  }
};
exports.update = async (q, r, n) => {
  try {
    r.json(await M.update(q.params.id, q.body));
  } catch (e) {
    n(e);
  }
};
exports.remove = async (q, r, n) => {
  try {
    await M.remove(q.params.id);
    r.json({ ok: true });
  } catch (e) {
    n(e);
  }
};
