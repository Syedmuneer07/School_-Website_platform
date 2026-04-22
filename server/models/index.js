
const mongoose = require("../config/db");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "admin", maxlength: 20 },
});
const User = mongoose.model("User", UserSchema);

const AchievementSchema = new Schema({
  student_name: { type: String, required: true, maxlength: 120 },
  title: { type: String, required: true, maxlength: 200 },
  description: { type: String },
  image_url: { type: String },
  created_at: { type: Date, default: Date.now },
});
const Achievement = mongoose.model("Achievement", AchievementSchema);

const AlumniSchema = new Schema({
  name: { type: String, required: true, maxlength: 120 },
  company: { type: String, maxlength: 120 },
  role: { type: String, maxlength: 120 },
  story: { type: String },
});
const Alumni = mongoose.model("Alumni", AlumniSchema);

const EventSchema = new Schema({
  title: { type: String, required: true, maxlength: 200 },
  description: { type: String },
  date: { type: Date, required: true },
});
const Event = mongoose.model("Event", EventSchema);

const ResultSchema = new Schema({
  student_name: { type: String, required: true, maxlength: 120 },
  roll_number: { type: String, required: true, maxlength: 50 },
  subject: { type: String, required: true, maxlength: 100 },
  marks: { type: Number, required: true, min: 0, max: 100 },
});
const Result = mongoose.model("Result", ResultSchema);

const ContactSchema = new Schema({
  name: { type: String, required: true, maxlength: 120 },
  email: { type: String, required: true, maxlength: 120 },
  subject: { type: String, maxlength: 200 },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = {
  User,
  Achievement,
  Alumni,
  Event,
  Result,
  Contact,
};
