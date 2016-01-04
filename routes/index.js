var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Blank = mongoose.model('Blank');

router.get('/blanks', function(req, res, next) {
  Blank.find(function(err, blanks){
    if(err){return next(err);}

    res.json(blanks);
  });
});

router.post('/blanks', function(req, res, next) {
  var blank = new Blank(req.body);
  blank.author = 'user';

  blank.save(function(err, blank){
    if(err){ return next(err); }

    res.json(blank);
  });
});

router.param('blank', function(req, res, next, id) {
  var query = Blank.findById(id);

  query.exec(function(err, blank){
    if (err) {return next(err);}
    if (!blank) {return next(new Error("can't find blank"));}

    req.blank = blank;
    return next();
  });
});

router.get('/blanks/:blank', function(req, res) {
  res.json(req.blank);
});

var Fill = mongoose.model('Fill');
router.get('/fills', function(req, res, next) {
  Fill.find(function(err, fills){
    if(err){return next(err);}

    res.json(fills);
  });
});

router.post('/fills', function(req, res, next) {
  var fill = new Fill(req.body);
  fill.author = 'user';

  fill.save(function(err, fill){
    if(err){ return next(err); }

    res.json(fill);
  });
});

module.exports = router;
