const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },

  name: {
    type:String
  },
  
  subscriptions: [{
    type: String
  }]

});

UserSchema.plugin(passportLocalMongoose);

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
