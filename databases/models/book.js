let mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
  name: String,
  description: String
});

let Book = mongoose.model('Book', BookSchema);

module.exports = Book;