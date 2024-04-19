const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID : Number,
    userName : String,
    email : String,
    Password : String
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;