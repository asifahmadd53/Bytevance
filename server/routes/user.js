const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
require('dotenv').config()

const userModel = require('../models/user')

router.post('/signup', async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = await userModel.create({
                fullname,
                email,
                password: hashedPassword
            });

            // Sign JWT and send token in a cookie
            jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) {
                    return res.status(500).json({ message: 'Token generation failed' });
                }
                res.cookie('token', token, { httpOnly: true })
                   .status(201)
                   .json({ message: 'User created successfully', email: user.email });
            });

        } else {
            res.status(400).json({ message: 'User already exists' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.post('/login',async (req, res)=>{
    const {email,password}=req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            res.status(400).json({message:"Invalid username and password"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            jwt.sign({email, id: user._id}, process.env.JWT_SECRET, {}, (err, token)=>{
                if(err) throw err
                res.cookie('token', token).json({
                    email: user.email
                })
            })

        }else{
            res.status(400).json({message:"Invalid username and password"})
        }
    }catch(err){
        console.log(err)
    }
})

router.get('/profile',async( req, res)=>{
        const {token} = req.cookies
        if(!token){
            return res.status(401).json({message:"Please login to access this route"})
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                return res.status(401).json({message:"Please login to access this route"})
            }
            res.json(decoded)
        })
})


router.post('/logout', (req, res)=>{
    res.clearCookie('token').json({message: 'Logged out successfully'})
})



module.exports = router;
