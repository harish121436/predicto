var express = require('express');
var router = express.Router();

let Team = require('../models/tt');
let Person = require('../models/pp');
let Batsman = require('../models/batsmen');
let Bowler = require('../models/bowlers');
let Stadium = require('../models/stadiums');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/pp', (req, res, next) => {
  res.render('pp');
});

router.get('/tt', (req, res) => {
  res.render('tt');
});

router.post('/pp', (req, res, next) => {
  let data = req.body;
  Person.getComaparison(data, (err, response) => {
    res.send(response);
  });
  // console.log(data);
  // res.send(data);
});

router.post('/tt', (req, res) => {
  let data = req.body;
  Team.getComaparison(data, (err, response) => {
    res.send(response);
  });
});

router.post('/batsmen', (req, res) => {
  Batsman.getAll((err, response) =>{
    if(err) throw err;
    else res.send(response);
  });
});

router.post('/bowlers', (req, res) => {
  Bowler.getAll((err, response) => {
    if(err) throw err;
    else res.send(response);
  });
});

router.post('/stadiums', (req, res) => {
  Stadium.getAll((err, response) => {
    if(err) throw err;
    else res.send(response);
  });
});

module.exports = router;
