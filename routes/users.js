var express = require('express');
var user = require('../model/user')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var response = {};
  if(req.session.email) {
    console.log(req.session.email)
  }

  user.find(function(err, data) {

    if(err) {
      response = {"error" : true,"message" : "Error fetching data"};
    }else {
      response = {"error" : false,"message" : data};
    }
    res.render('listUsers',{users: response.message})
  })
});

module.exports = router;
