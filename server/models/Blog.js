const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, ref:'user'
    }
})