const mongoose = require('mongoose');

// Define the schema for the blog
const BlogSchema = new mongoose.Schema({
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    approved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create an index for the `author` field
BlogSchema.index({ author: 1 });

// Create the blog model
const BlogModel = mongoose.model('blog', BlogSchema);

// Export the model
module.exports = BlogModel;
