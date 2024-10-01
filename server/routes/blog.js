const express =require('express')
const router = express.Router()
const blogModel = require('../models/Blog')
const jwt = require('jsonwebtoken')
require('dotenv').config()



router.post('/created-blog', async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) return res.status(500).json({ message: 'Error verifying token' });

        const { title, description, summary, image } = req.body; // Getting the base64 image

        try {
            const blog = await blogModel.create({
                title,
                description,
                summary,
                cover: image, // Storing base64 image in the database
                author: info.id
            });
            res.status(201).json({ message: 'Blog created successfully', blog });
        } catch (err) {
            res.status(400).json(err);
        }
    });
});


module.exports = router