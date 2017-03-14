var express = require('express')
var router = express.Router()
var User  = require('../model/user')

router.get('/', function(req, res) {
    res.render('createUser')
})

router.post('', function(req, res) {
 req.session.email = req.body.email;
    //var email = req.body.email
    //var pass = req.body.password
    var user = new User()
    user.email = req.body.email;
    user.password = req.body.password;
    user.save();
    res.redirect('/users')
})

router.get('/:id', function(req, res) {
    user.findById(req.params.id, function(err, data){
        res.json(data)
    })
})

module.exports = router