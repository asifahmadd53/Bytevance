const express = require('express')
const router = express.Router()
const blogModel = require('../models/Blog')


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


module.exports = router