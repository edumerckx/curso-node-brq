var model = require('../models/DragonModel');

var DragonController = {};

DragonController.getAll = function(req, res) {
  var limit = req.query.limit || 50;
  var skip = req.query.skip || 0;

  model.find({}, {limit: limit, skip: skip}, function(err, data) {
    if (err) {
      res.json({err: 'Deu erro...'});
      console.log(err);
      return;
    }
    res.json(data);
  });
};

DragonController.getOne = function(req, res) {
  var _id = req.params._id;
  model.findById(_id, function(err, data) {
    res.json(data);
  })
};

DragonController.create = function(req, res) {
  model.create(req.body, function(err, data, next) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

DragonController.update = function(req, res) {
  var _id = req.params._id;
  model.update(_id, req.body, function(err, data, next) {
    if (err) {
      return next(err);
      res.status(500).send(err);
    }
    res.json(data);
  });
};

DragonController.delete = function(req, res) {
  var _id = req.params._id;
  model.delete(_id, function(err, data, next) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

module.exports = DragonController;
