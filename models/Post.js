const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const model = mongoose.model;

const postSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  text: {
    type: String
  },
  description: {
    type: String,
    required: true
  }
  time: { 
    type : Date, 
    default: Date.now 
}
  business: [
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Business' 
    }
]
  
});

module.exports = model("Post", postSchema);
