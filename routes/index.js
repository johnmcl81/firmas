var express = require('express');
var router = express.Router();
const jade = require("jade");

var slug = function(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '_') // collapse whitespace and replace by -
    .replace(/-+/g, '_'); // collapse dashes

  return str;
};

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
    photo: slug(locals.first_name + " " + locals.last_name) + ".jpg",
    first_name: locals.first_name, 
    last_name: locals.last_name, 
    position: locals.position,
    phone: locals.phone,
  });
});


module.exports = router;