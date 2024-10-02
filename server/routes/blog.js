const express =require('express')
const router = express.Router()
const blogModel = require('../models/Blog')
const jwt = require('jsonwebtoken')
require('dotenv').config()
// const upload = require('../config/multer-config')
const multer = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/created-blog', upload.single('image'), async (req, res) => {
    console.log('Received request to create blog');
    
    const { token } = req.cookies;
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) {
            console.log('Token verification failed', err);
            return res.status(500).json({ message: 'Error verifying token' });
        }

        const { title, description, summary } = req.body; 
        const imageFile = req.file;

        if (!imageFile) {
            console.log('No image file provided');
            return res.status(400).json({ message: 'Image not provided' });
        }

        const base64Image = req.file.buffer.toString('base64');

        try {
            const blog = await blogModel.create({
                title,
                description,
                summary,
                cover: base64Image,
                author: info.id
            });
            console.log('Blog created successfully:', blog);
            res.status(201).json({ message: 'Blog created successfully', blog });
        } catch (err) {
            console.log('Error creating blog:', err);
            res.status(400).json(err);
        }
    });
});



module.exports = router