var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  console.log(req.cookies);
  res.json({"requestHeaders": req.headers, "requestBody": req.body, "requestQuery": req.query, "requestCookies": req.cookies})
});

module.exports = router;
