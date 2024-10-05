const express = require('express');
const router = express.Router();
const blogModel = require('../models/Blog');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const upload = require('../config/multer-config')

router.post('/created-blog', upload.single('image'), async (req, res) => {
    console.log('Received request to create blog');
    
    const { token } = req.cookies;  // Ensure the client is sending cookies properly
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        // Verify the JWT token
        const info = jwt.verify(token, process.env.JWT_SECRET);

        // Destructure request body
        const { title, description, summary } = req.body; 
        
        const imageBase64 = req.file.buffer.toString('base64');
        const imageMimeType = req.file.mimetype;
        const imageSrc = `data:${imageMimeType};base64,${imageBase64}`;


        const blog = await blogModel.create({
            title,
            description,
            summary,
            cover: imageSrc,
            author: info.id,    
        });
        console.log('Blog created successfully:', blog);
        res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (err) {
        console.log('Error during blog creation:', err);
        res.status(500).json({ message: 'Error creating blog', error: err.message });
    }
});

module.exports = router;
