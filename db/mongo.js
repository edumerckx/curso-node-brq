var mongojs = require('mongojs');
var db = mongojs('curso');

// db.on('error', function(err) {
//   console.log(err);
// });

module.exports = db;
