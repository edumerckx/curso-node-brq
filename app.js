var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);

app.use(function(req, res, next) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon'});
    return res.send('');
  }
  next();
});

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

/* istanbul ignore next */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);

  console.log(err.stack);
});

module.exports = app;
