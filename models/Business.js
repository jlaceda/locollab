const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;

const businessSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  category: { type: String }
});

module.exports = model("Business", businessSchema);
