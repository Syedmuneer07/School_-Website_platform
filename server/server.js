// Entry point: Express app wiring all routes together.
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const achievementRoutes = require("./routes/achievementRoutes");
const resultRoutes = require("./routes/resultRoutes");
const alumniRoutes = require("./routes/alumniRoutes");
const eventRoutes = require("./routes/eventRoutes");
const contactRoutes = require("./routes/contactRoutes");


const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "https://school-website-platform.onrender.com" }));
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Feature routes
app.use("/api/auth", authRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contacts", contactRoutes);

// Centralized error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

const PORT = process.env.PORT || 5000;


const mongoose = require("./config/db");

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.error("Unable to start server:", err);
  process.exit(1);
});
