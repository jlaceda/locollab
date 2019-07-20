import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  businesses: [{ type: Schema.Types.ObjectId, ref: 'Business' }]
});

const User = model("User", userSchema);

export default User;
