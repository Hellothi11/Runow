let bcrypt   = require('bcrypt-nodejs');

function encryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

function comparePassword(password1, password2) {
    return bcrypt.compareSync(password1, password2)
  }

module.exports = {
    encryptPassword: encryptPassword,
    comparePassword: comparePassword
}
