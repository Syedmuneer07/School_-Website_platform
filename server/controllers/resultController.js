const M = require("../models/resultModel");
exports.getByRoll = async (req, res, next) => {
  try {
    const rows = await M.findByRoll(req.params.rollNumber);
    if (!rows.length)
      return res
        .status(404)
        .json({ error: "No results found for that roll number" });
    res.json(rows);
  } catch (e) {
    next(e);
  }
};
exports.create = async (req, res, next) => {
  try {
    res.status(201).json(await M.create(req.body));
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    res.json(await M.update(req.params.id, req.body));
  } catch (e) {
    next(e);
  }
};
exports.remove = async (req, res, next) => {
  try {
    await M.remove(req.params.id);
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
};

exports.list = async (req, res, next) => {
  try {
    res.json(await M.list());
  } catch (e) {
    next(e);
  }
};