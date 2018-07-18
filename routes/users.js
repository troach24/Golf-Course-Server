var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/push-token', function(req, res, next) {
//   res.send('Yo')
// })

module.exports = router;
