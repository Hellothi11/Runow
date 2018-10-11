let express = require('express');
let router = express.Router();
let controller = require('../controllers/users.js')
let passport = require('passport');

router.get('/signin', function(req, res) {
  let msg = req.flash('error')[0];
  console.log("Sign in error: " + msg);
  res.render('signin', { title: 'Sign In', message: msg});
});

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect : '/books/list', 
  failureRedirect: '/users/sigin', 
  failureFlash : true
}));

router.get('/signup', function(req, res) {
  let msg = req.flash('error')[0];
  console.log("Sign up error: " + msg);
  res.render('signup', { title: 'Sign up', message: msg });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/home',
  failureRedirect: '/users/signup',
  failureFlash : true
}));

module.exports = router;
