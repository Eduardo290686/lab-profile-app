const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campusSchema = new Schema({
  city: String
}, {
  timestamps: true
});

const Campus = mongoose.model("Campus", campusSchema);
module.exports = Campus;
