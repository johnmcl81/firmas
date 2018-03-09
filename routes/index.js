var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Firma' });
});

router.post('/firma', function (req, res) {
  console.log(req.body.name);
  console.log(req.body.job);
  var name = req.body.name
  var job = req.body.job
  res.render('firma', { name: name, job: job});
});

module.exports = router;
