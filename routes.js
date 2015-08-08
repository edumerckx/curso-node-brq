var router = require('express').Router();
var controller = require('./controllers/DragonController');

router.get('/', function(req, res) {
  console.log(req.headers);

  if (req.headers.accept === 'text/plain') {
    res.send('hello world');
  } else {
    res.json({msg: 'hello world'});
  }
});

router.get('/dragons', controller.getAll);
router.get('/dragons/:_id', controller.getOne);
router.post('/dragons', controller.create);
router.put('/dragons/:_id', controller.update);
router.delete('/dragons/:_id', controller.delete);

module.exports = router;
