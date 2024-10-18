const mongoose = require('mongoose');

// Define the schema for the blog
const AdminBlogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



// Create the blog model
const AdminBlogs = mongoose.model('adminblogs', AdminBlogsSchema);



// Export the model
module.exports = AdminBlogs;
