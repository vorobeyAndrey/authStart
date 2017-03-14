var mongoose = require('lib/mongoose');
var util = require('util');
var crypto = require('crypto')


var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    hashedPassword: {type: String, required: true},
    salt: {type: String, required: true},
    created:{type: Date, default: Date.now}
})

userSchema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}
module.exports = mongoose.model('User', userSchema)

