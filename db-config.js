var mongoose = require ("mongoose"); 

var uristring =
process.env.MONGO_DB_URI ||
'mongodb://localhost/Runow';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports = mongoose;