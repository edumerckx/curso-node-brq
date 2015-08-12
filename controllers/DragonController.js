var Promise = require('bluebird');
var model = require('../models/DragonModel');

model = Promise.promisifyAll(model);

var DragonController = {};

DragonController.getAll = function(req, res, next) {
  var limit = req.query.limit || 50;
  var skip = req.query.skip || 0;


  model.findAsync({}, { limit: limit, skip: skip })
    .then(function(data) {
      res.json(data);
    })
    .catch(next);

  // model.find({}, {limit: limit, skip: skip}, function(err, data) {
  //   if (err) {
  //     res.json({err: 'Deu erro...'});
  //     console.log(err);
  //     return;
  //   }
  //   res.json(data);
  // });
};

DragonController.getOne = function(req, res, next) {
  var _id = req.params._id;

  model.findByIdAsync(_id)
    .then(function(data) {
      res.json(data);
    })
    .catch(next);
  // model.findById(_id, function(err, data) {
  //   res.json(data);
  // });
};

DragonController.create = function(req, res, next) {
  model.createAsync(req.body)
    .then(function(data) {
      res.json(data);
    })

  // model.create(req.body, function(err, data, next) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json(data);
  // });
};

DragonController.update = function(req, res, next) {
  var _id = req.params._id;

  model.updateAsync(_id, req.body)
    .then(function(data) {
      res.json(data);
    })
    .catch(next);
  // model.update(_id, req.body, function(err, data, next) {
  //   if (err) {
  //     return next(err);
  //     res.status(500).send(err);
  //   }
  //   res.json(data);
  // });
};

DragonController.delete = function(req, res, next) {
  var _id = req.params._id;
  model.deleteAsync(_id)
    .then(function(data) {
      res.json(data);
    })
    .catch(next);
  // model.delete(_id, function(err, data, next) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.json(data);
  // });
};

module.exports = DragonController;
