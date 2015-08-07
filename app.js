var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);

  console.log(err.stack);
});

app.listen(3000, function() {
  console.log('bagaça rodando...');
});
