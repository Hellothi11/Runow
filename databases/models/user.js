let mongoose = require("mongoose");
let bcrypt   = require('bcrypt-nodejs');

let UserSchema = new mongoose.Schema({
  local            : {
    username     : String,
    email        : String,
    password     : String
  },
  facebook         : {
    id           : String,
    token        : String,
    name         : String,
    email        : String
  },
  twitter          : {
    id           : String,
    token        : String,
    displayName  : String,
    username     : String
  },
  google           : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  }
});

// generating a hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

let User = mongoose.model('User', UserSchema);

module.exports = User;