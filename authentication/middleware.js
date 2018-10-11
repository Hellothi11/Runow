function authenticationMiddleware () {
    return function (req, res, next) {
        console.log("isAuthenticated: " + req.isAuthenticated());
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/users/signin');
    }
  }
  
  module.exports = authenticationMiddleware;