let express = require('express');
let router = express.Router();
let controller = require('../controllers/books.js')
const passport = require('passport')

router.get('/list', passport.authenticationMiddleware(), controller.list);
router.get('/add', passport.authenticationMiddleware(), (req, res, next) => {
    res.render('add_book');
});
router.post('/add', passport.authenticationMiddleware(), controller.add);
router.get('/delete/:id', passport.authenticationMiddleware(), controller.delete);
router.get('/edit/:id', passport.authenticationMiddleware(), controller.getEdit);
router.post('/edit/:id', passport.authenticationMiddleware(), controller.edit);
module.exports = router;
