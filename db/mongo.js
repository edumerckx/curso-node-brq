var mongojs = require('mongojs');
var config = require('config');

var db = mongojs(config.get('mongo.database'));

db.on('error', function(err) {
  console.log(err);
});

module.exports = db;
