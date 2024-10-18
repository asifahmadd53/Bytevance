let mongoose = require('mongoose')

let SubscribersSchema = mongoose.Schema({
    email: String,
})

const SubscribersModel = mongoose.model('Subscribers', SubscribersSchema);

module.exports = SubscribersModel