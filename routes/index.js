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
    title: req.body.company + " - " + req.body.first_name,
    first_name: req.body.company == 'homeclub' ? req.body.first_name.toUpperCase() : req.body.first_name, 
    last_name: req.body.company == 'homeclub' ? req.body.last_name.toUpperCase() : req.body.last_name,
    position: req.body.company == 'homeclub' ? req.body.position.toUpperCase() : req.body.position,
    phone: "+34 " + req.body.phone.replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/,''),
    phone_link: "+34" + req.body.phone.trim(),
    company: req.body.company,
    photo: slug(req.body.first_name + " " + req.body.last_name) + ".jpg"
  }

  res.render('show', 
  { 
    title: locals.title,
    company: locals.company,
    photo: locals.photo,
    first_name: locals.first_name, 
    last_name: locals.last_name, 
    position: locals.position,
    phone: locals.phone,
    phone_link: locals.phone_link
  });
});


module.exports = router;