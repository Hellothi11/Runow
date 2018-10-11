let Book = require('../databases/models/book');

module.exports.list = function(req, res, next) {
    Book.find( (error, results) => {
        if (error) {
            res.render('error');
        } else {
            res.render('list_book', { books: results });
        }
    });
};

module.exports.add = function(req, res, next) {
    var book = new Book();
    book.name = req.body.name;
    book.description = req.body.description;

    book.save(function(err) {
        if (err)
            res.render('list_book', {error: err});
        else 
            res.redirect('/books/list');
    });
};

module.exports.getEdit = function(req, res, next) {
    Book.findById(req.params.id, (err, data) => {
        if (err)
            res.render('error', {error: err});
        else {
            res.render('edit_book', {book: data});
        }
    });
};

module.exports.edit = function(req, res, next) {
    Book.findById(req.params.id, (err, data) => {
        if (err)
            res.render('/books/edit/' + req.params.id, {error: err});
        else {
            data.set({name: req.body.name, description: req.body.description});
            data.save((error, updatedBook) => {
                if (err) {
                    res.render('/books/edit/' + req.params.id, {error: err});
                } else {
                    res.redirect('/books/list');
                }
            })
        }
    });
};

module.exports.delete = function(req, res, next) {
    Book.findOneAndRemove(req.params.id, req.body, function(err,data)
    {
        if (err)
            res.render('error', {error: err});
        else 
            res.redirect('/books/list');
    });
};