const r = require("express").Router();
const c = require("../controllers/resultController");
const auth = require("../middleware/authMiddleware");
r.get("/", auth, c.list);
r.get("/:rollNumber", c.getByRoll);
r.post("/", auth, c.create);
r.put("/:id", auth, c.update);
r.delete("/:id", auth, c.remove);
module.exports = r;
