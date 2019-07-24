const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
  name: { type: String, required: true },
  businesses: [{ type: Schema.Types.ObjectId, ref: 'Business' }]
});

module.exports = model("User", userSchema);
