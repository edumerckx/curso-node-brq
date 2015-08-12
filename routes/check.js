var router = require('express').Router();
var db = require('../db/mongo');

router.get('/status/complete', function(req, res, next) {
  var ret = {
    ok: true,
    appName: 'curso',
    version: '0.0.1',
    checks: []
  };

  db.collection('dragons').find({}, function(err, data) {
    ret.ok = !err;
    ret.checks.push({
      ok: !err,
      name: 'mongo',
      error: (err ? err.message : ''),
      details: {
        url: 'localhost:27017'
      }
    });
    res.json(ret);
  });
});

module.exports = router;
