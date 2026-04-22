const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "admin",
    },
  },
  {
    tableName: "users",
    timestamps: false,
  },
);

const Achievement = sequelize.define(
  "Achievement",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    student_name: { type: DataTypes.STRING(120), allowNull: false },
    title: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT },
    image_url: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "achievements",
    timestamps: false,
  },
);

const Alumni = sequelize.define(
  "Alumni",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(120), allowNull: false },
    company: { type: DataTypes.STRING(120) },
    role: { type: DataTypes.STRING(120) },
    story: { type: DataTypes.TEXT },
  },
  {
    tableName: "alumni",
    timestamps: false,
  },
);

const Event = sequelize.define(
  "Event",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(200), allowNull: false },
    description: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATEONLY, allowNull: false },
  },
  {
    tableName: "events",
    timestamps: false,
  },
);

const Result = sequelize.define(
  "Result",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    student_name: { type: DataTypes.STRING(120), allowNull: false },
    roll_number: { type: DataTypes.STRING(50), allowNull: false },
    subject: { type: DataTypes.STRING(100), allowNull: false },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0, max: 100 },
    },
  },
  {
    tableName: "results",
    timestamps: false,
  },
);

const Contact = sequelize.define(
  "Contact",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(120), allowNull: false },
    email: { type: DataTypes.STRING(120), allowNull: false },
    subject: { type: DataTypes.STRING(200) },
    message: { type: DataTypes.TEXT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "contacts",
    timestamps: false,
  },
);

module.exports = {
  sequelize,
  User,
  Achievement,
  Alumni,
  Event,
  Result,
  Contact,
};
