var router = require('express').Router();

router.get('/', function(req, res) {
  if (req.headers.accept === 'text/plain') {
    res.send('hello world');
  } else {
    res.json({msg: 'hello world'});
  }
});

router.get('/home', function(req, res) {
  res.render('index', { title: 'Batatinha' });
})

router.get('/contato', function(req, res) {
  var emails = [
    'edu_merckx@yahoo.com.br',
    'eduardogomes@brq.com'
  ];

  res.render('contato', { emails: emails });
})

router.use('/', require('./dragons'));
router.use('/check', require('./check'));

module.exports = router;
