let express = require('express');
let router = express.Router();
let controller = require('../controllers/books.js')

router.get('/list', controller.list);
router.get('/add', (req, res, next) => {
    res.render('add_book');
});
router.post('/add', controller.add);
router.get('/delete/:id', controller.delete);
router.get('/edit/:id', controller.getEdit);
router.post('/edit/:id', controller.edit);
module.exports = router;
