var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  email: String,
  social_id: {
    type: String,
    index: true
  },
  is_facebook: Boolean,
  name: String,
  number_of_keys: Number,
  last_activity: Date,
  level: Number
});

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User
}