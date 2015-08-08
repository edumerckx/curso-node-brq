var request = require('supertest'); // conjura
var app = require('../app'); // conjura
var assert = require('assert'); // conjura
var db = require('../db/mongo');

describe('Dragons endpoints', function() {
  beforeEach(function(done) {
    var dragon = { name: 'foguinho', type: 'fire' }
    db.collection('dragons').insert(dragon, done);
  });
  afterEach(function(done) {
    db.collection('dragons').remove({}, done);
  });

  it('GET /dragons', function(done) {
    request(app)
      .get('/dragons')
      .end(function(err, result) {
        assert.ok(result.body.length);
        // console.log(result.body[0].name);
        assert.equal(result.body[0].name, 'foguinho');
        done();
      });
  });

  it('GET /dragons/:_id', function(done) {
    var dragon = { name: 'baba', type: 'unknown' };
    db.collection('dragons').insert(dragon, function(err, data) {
      request(app)
        .get('/dragons/' + data._id)
        .end(function(err, result) {
          var body = result.body;
          var expected = { name: 'baba', _id: data._id.toString(), type: 'unknown' };

          assert.deepEqual(result.body, expected);
          assert.equal(result.body.name, 'baba');
          assert.equal(result.body.type, 'unknown');
          done();
        });
    });
  });

  it('POST /dragons', function(done) {
    request(app)
      .post('/dragons')
      .send({ name: 'tiamat', type: 'ice' })
      .end(function(err, result) {

        done();
      })
  });

  it('DELETE /dragons/:_id', function(done) {
    var dragon = { name: 'maria', type: 'tia' };
    db.collection('dragons').insert(dragon, function(err, data) {
      request(app)
        .delete('/dragons/' + data._id)
        .end(function(err, result) {
          var expected = { ok: 1, n: 1 };
          assert.deepEqual(result.body, expected);
          done();
        });
    });
  });

  it('PUT /dragons/:_id', function(done) {
    var dragon = { name: 'baba', type: 'unknown' };
    db.collection('dragons').insert(dragon, function(err, data) {
      request(app)
        .put('/dragons/' + data._id)
        .send({ type: 'ice' })
        .end(function(err, result) {
          var body = result.body;
          var expected = { ok: 1, n: 1 };
          assert.deepEqual(result.body, expected);
          done();
        });
    });
  });

});
