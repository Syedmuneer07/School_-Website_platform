const { Sequelize } = require("sequelize");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is required in the environment for Sequelize.");
}

const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
});

module.exports = sequelize;
