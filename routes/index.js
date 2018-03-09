var express = require('express');
var router = express.Router();
const jade = require("jade");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Firma' });
});

router.post('/firma', function (req, res) {

  var locals = {
    name: req.body.name, 
    job: req.body.job,
    web: req.body.web,
    photo: req.body.photo
  }

  res.render('create', 
  { 
    firma: jade.renderFile('views/firma.jade', locals),
    name: req.body.name, 
    job: req.body.job,
    web: req.body.web,
    photo: req.body.photo
  });
});

module.exports = router;