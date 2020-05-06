const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  campus: [{ type: Schema.Types.ObjectId, ref: "Campus" }],
  course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  image: String
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
