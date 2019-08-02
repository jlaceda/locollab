const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;

const businessSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bname: { type: String, required: true },
  location: { type: String, required: true },
  bdesc: { type: String },
  phone: { type: String },
  category: { type: String },
  audience: { type: String }
});

module.exports = model("Business", businessSchema);