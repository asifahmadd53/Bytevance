const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const userModel = require('../models/user')

router.post('/signup', async(req, res)=>{
    const {fullname, email, password} = req.body;
    
    try{
        const user = userModel.findOne({email})
        if(!user){
            const salt = bcrypt.genSalt(10)
            const hashedPassword = bcrypt.hash(password, salt)
            const user = await userModel.create({
                fullname, email, password: hashedPassword
            })
            console.log(user)
            res.status(201).json({message: 'User created successfully', user})
        }
        else{
            res.status(400).json({message: 'User already exists'})
        }
    }
    catch(err){
        console.log(err)
    }
   

})

module.exports = router