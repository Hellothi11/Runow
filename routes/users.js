let express = require('express');
let router = express.Router();
let controller = require('../controllers/users.js')

router.get('/login', function(req, res) {
  res.render('login', { title: 'Sign In'})
});

router.post('/login', controller.postLogin);

router.get('/register', function(req, res) {
  res.render('register', { title: 'Register'})
});

module.exports = router;
