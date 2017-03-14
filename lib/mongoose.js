var mongoose = require('mongoose');
var config = require('../config');

console.log(config, '123123');
mongoose.connect('mongodb://localhost/shops', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

module.exports = mongoose;