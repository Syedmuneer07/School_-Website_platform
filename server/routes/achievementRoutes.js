const r = require("express").Router();
const c = require("../controllers/achievementController");
const auth = require("../middleware/authMiddleware");
r.get("/", c.list);
r.post("/", auth, c.create);
r.put("/:id", auth, c.update);
r.delete("/:id", auth, c.remove);
module.exports = r;
