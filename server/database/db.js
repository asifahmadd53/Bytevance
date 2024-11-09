const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL; 

mongoose.connect(mongoURL);

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to database');
});

db.on('error', console.error.bind(console, 'Connection error:'));

db.on('disconnected', () => {
    console.error('Disconnected from database');
});

module.exports = db;
