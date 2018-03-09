var express = require('express');
var router = express.Router();
const jade = require("jade");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nueva Firma' });
});

router.post('/create', function (req, res) {

  var locals = {
    name: req.body.name.toUpperCase(), 
    job: req.body.job.toUpperCase(),
    phone: req.body.phone,
    photo: req.body.photo
  }

  res.render('create', 
  { 
    title: "Firma - " + locals.name,
    firma_homeselect: jade.renderFile('views/partials/firma_homeselect.jade', locals),
    firma_homeclub: jade.renderFile('views/partials/firma_homeclub.jade', locals),
    name: locals.name, 
    job: locals.job,
    phone: locals.phone,
    photo: locals.photo
  });
});

router.get('/show', function (req, res) {

  res.render('show', 
  { 
    title: req.query.template + " - " + req.query.name,
    template: req.query.template,
    name: req.query.name.toUpperCase(), 
    job: req.query.job.toUpperCase(),
    phone: req.query.phone,
    photo: req.query.photo
  });
});

module.exports = router;