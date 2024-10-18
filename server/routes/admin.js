const express = require('express')
const router = express.Router()
const blogModel = require('../models/Blog')
const upload = require('../config/multer-config')
const AdminBlogs = require('../models/AdminBlogs')


router.patch('/approved/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const result = await blogModel.updateOne({_id: id},{approved:true})
        res.json(result)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.patch('/pending/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await blogModel.updateOne({ _id: id }, { approved: false });
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


router.post('/admin-blogs', upload.single('image'), async (req, res) => {
    const { token } = req.cookies;  

    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        // Verify the JWT token
        // const info = jwt.verify(token, process.env.JWT_SECRET);

        // Destructure request body
        const { title, description, summary } = req.body; 
        
        const imageBase64 = req.file.buffer.toString('base64');
        const imageMimeType = req.file.mimetype;
        const imageSrc = `data:${imageMimeType};base64,${imageBase64}`;


        const Adminblog = await AdminBlogs.create({
            title,
            description,
            summary,
            cover: imageSrc,
              
        });
        
        res.status(201).json({ message: 'Blog created successfully', Adminblog });
    } catch (err) {
      console.error('Error creating blog:', err); 
      res.status(500).json({ message: 'Error creating blog', error: err.message });
  }
})


router.get('/admin-blogs',async(req, res)=>{
  try{
      const AdminBlog = await AdminBlogs.find().sort({createdAt:-1}).limit(20)
      res.status(200).json(AdminBlog)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})


router.get('/admin-blog/:id', async (req, res)=>{
  try{
    const {id} = req.params;
    const AdminBlog = await AdminBlogs.findById(id)
    res.status(200).json(AdminBlog);
  }catch(err){
    res.status(500).json({message:err.message})
  }
})







module.exports = router