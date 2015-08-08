var db = require('../db/mongo');
var DragonModel = {};

DragonModel.find = function(query, pagination, callback) {
  db.collection('dragons')
    .find(query)
    .limit(pagination.limit)
    .skip(pagination.skip)
    .sort({_id: 1}, callback);
};

DragonModel.findById = function(_id, callback) {
  var query = { _id: db.ObjectId(_id)};
  db.collection('dragons').findOne(query, callback);
};

DragonModel.create = function(data, callback) {
  db.collection('dragons').insert(data, callback);
};

DragonModel.update = function(_id, data, callback) {
  var query = { _id: db.ObjectId(_id) };
  db.collection('dragons').update(query, { $set: data }, callback);
};

DragonModel.delete = function(_id, callback) {
  var query = { _id: db.ObjectId(_id) };
  db.collection('dragons').remove(query, callback);
};

module.exports = DragonModel;
