var model = require('../models/DragonModel');

var DragonController = {};

DragonController.getAll = function(req, res) {
  // res.send('show all dragons');

  var limit = req.query.limit || 10;
  var skip = req.query.skip || 2;

  model.find({}, {limit: 2, skip: 1}, function(err, data) {
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
  console.log(req.body);
  res.send('cria dragão');
};

DragonController.update = function(req, res) {
  var _id = req.params._id;
  res.send('atualiza dragão ' + _id);
};

DragonController.delete = function(req, res) {
  console.log(req.body);
  res.send('cria dragão');
};

module.exports = DragonController;
