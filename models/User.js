const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  // Adding in new login information
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  business:
    { 
      type: Schema.Types.ObjectId,
      ref: 'Business'
    }
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}



module.exports = model("User", UserSchema);