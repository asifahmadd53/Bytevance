const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
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
    },
    approved: { 
        type: Boolean, default: false 
    },
    createdAt: { 
        type: Date, default: Date.now
     }
})

const postModel = mongoose.model('blog', BlogSchema)
module.exports = postModel