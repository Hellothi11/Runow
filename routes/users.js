let express = require('express');
let router = express.Router();
let controller = require('../controllers/users.js')
let passport = require('passport');

router.get('/signin', function(req, res) {
  res.render('signin', { title: 'Sign In'})
});

router.post('/signin', controller.postSignin);

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Sign up'})
});

router.post('/signup', passport.authenticate('local-signup', { failureRedirect: '/error' }),
  controller.postSignup
);

module.exports = router;
