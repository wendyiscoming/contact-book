var express = require('express');
var router = express.Router();

// Route
router.get('/', function(req, res) {
  res.redirect('/contacts');
});

module.exports = router;
