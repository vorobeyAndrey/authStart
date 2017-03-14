var nconf = require('nconf');
var path = require('path');
console.log(__dirname)
nconf.argv()
    .env()
;

module.exports = nconf