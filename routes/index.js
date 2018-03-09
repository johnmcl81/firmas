var express = require('express');
var router = express.Router();
const jade = require("jade");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nueva Firma' });
});

router.post('/show', function (req, res) {

  var locals = {
    first_name: req.body.first_name.toUpperCase(), 
    last_name: req.body.last_name.toUpperCase(),
    position: req.body.position.toUpperCase(),
    phone: req.body.phone,
    company: req.body.company
  }

  res.render('show', 
  { 
    title: locals.company + " - " + locals.first_name,
    company: locals.company,
    photo: locals.first_name + "_" + locals.last_name + ".jpg",
    first_name: locals.first_name, 
    last_name: locals.last_name, 
    position: locals.position,
    phone: locals.phone,
  });
});


module.exports = router;