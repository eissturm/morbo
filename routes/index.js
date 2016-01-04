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
