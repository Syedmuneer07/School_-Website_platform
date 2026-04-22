const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Missing credentials" });

    const user = await User.findByUsername(username);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (e) { next(e); }
};
