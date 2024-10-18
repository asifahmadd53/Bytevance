let mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name: String,
    email:String,
    message:String
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact