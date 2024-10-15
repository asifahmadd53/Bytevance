const express = require('express');
const router = express.Router();
const blogModel = require('../models/Blog');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user')
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

        const user = await userModel.findById(info.id);
        // if (!user) {
        //     console.log('User not found');
        //     return res.status(404).json({ message: 'User not found' });
        // }

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

router.get('/pending-blogs',async(req, res)=>{
    try{
        const blogs = await blogModel.find({approved:false}).populate('author',['fullname']).sort({createdAt:-1}).limit(20)
        res.status(200).json(blogs)
    }
    catch(err){
        console.log(err)
    }
})


router.get('/blog/:id',async(req, res)=>{
    try{
        const {id} = req.params
        const blog = await blogModel.findById(id).populate('author',['fullname'])
        res.status(200).json(blog)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/approved-blogs',async(req, res)=>{
    try{
        const blogs = await blogModel.find({approved:true}).populate('author',['fullname']).sort({createdAt:-1}).limit(20)
        res.status(200).json(blogs)
    }
    catch(err){
        console.log(err)
    }
})



router.get('/blog-user-page/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id).populate('author', ['fullname']);
        res.status(200).json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch blog post' });
    }
});


module.exports = router;
