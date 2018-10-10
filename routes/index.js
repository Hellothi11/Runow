var express = require('express');
var router = express.Router();
let isLoggedIn = require('./routes').isLoggedIn;
let passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users/signin');
});

router.get('/error', function(req, res, next) {
  res.render('error');
});

router.get('/home', function(req, res, next) {
  res.render('home');
})
module.exports = router;
