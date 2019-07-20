import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const businessSchema = new Schema({
  name: { type: String, required: true }
});

const Business = model("Business", businessSchema);

export default Business;