var express = require('express');
var router = express.Router();
const jade = require("jade");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Firma' });
});

router.post('/firma', function (req, res) {

  var locals = {
    name: req.body.name.toUpperCase(), 
    job: req.body.job.toUpperCase(),
    phone: req.body.phone,
    photo: req.body.photo
  }

  res.render('create', 
  { 
    firma_homeselect: jade.renderFile('views/partials/firma_homeselect.jade', locals),
    firma_homeclub: jade.renderFile('views/partials/firma_homeclub.jade', locals),
    name: locals.name, 
    job: locals.job,
    phone: locals.phone,
    photo: locals.photo
  });
});

module.exports = router;