const r = require("express").Router();
const c = require("../controllers/contactController");
const auth = require("../middleware/authMiddleware");
r.get("/", auth, c.list);
r.post("/", c.create);
r.put("/:id", auth, c.update);
r.delete("/:id", auth, c.remove);
module.exports = r;
