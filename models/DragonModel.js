var db = require('../db/mongo');
var DragonModel = {};

DragonModel.find = function(query, pagination, callback) {
  db.collection('dragons')
    .find(query)
    .limit(pagination.limit)
    .skip(pagination.skip)
    .sort({name: 1}, callback);
};

DragonModel.findById = function(_id, callback) {
  var query = { _id: db.ObjectId(_id)};
  db.collection('dragons').findOne(query, callback);
}

module.exports = DragonModel;
