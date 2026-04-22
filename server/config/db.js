
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(['1.1.1.1', '8.8.8.8']);
require("dotenv").config();


const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI is required in the environment for Mongoose.");
}

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on("error", (err) => console.error("MongoDB connection error:", err));
db.once("open", () => console.log("MongoDB connected"));

module.exports = mongoose;
