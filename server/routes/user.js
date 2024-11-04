const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')
require('dotenv').config()

const userModel = require('../models/user')
const SubscribersModel = require('../models/Subscribers')
const ContactModel = require('../models/Contact')

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


// router.post('/login',async (req, res)=>{
//     const {email,password}=req.body;
//     try{
//         const user = await userModel.findOne({email});
//         if(!user){
//             res.status(400).json({message:"Invalid username and password"})
//         }

       
//         const isAdmin = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD;
//         const role = isAdmin ? 'admin' : 'user';


//         const isMatch = await bcrypt.compare(password,user.password);
//         if(isMatch){
//             jwt.sign({email, id: user._id, role }, process.env.JWT_SECRET, {}, (err, token)=>{
//                 if(err) throw err
//                 res.cookie('token', token).json({
//                     email: user.email
//                 })
//             })

//         }else{
//             res.status(400).json({message:"Invalid username and password"})
//         }
//     }catch(err){
//         console.log(err)
//     }
// })

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
       
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const role = 'admin';
            const token = jwt.sign({ email, role }, process.env.JWT_SECRET);
            res.cookie('token', token).json({ email, role });
            return;
        }

       
        const user = await userModel.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: "Invalid username and password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const role = 'user'; 
            const token = jwt.sign({ email, id: user._id, role }, process.env.JWT_SECRET);
            res.cookie('token', token).json({ email: user.email, role });
        } else {
            res.status(400).json({ message: "Invalid username and password" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get('/profile',async( req, res)=>{
        const {token} = req.cookies
    
        if(!token){
            return res.status(401).json(null)
        }
        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                return res.status(401).json(null)
            }
            res.json(decoded)
        })
})


router.post('/logout', (req, res)=>{
    res.clearCookie('token').json({message: 'Logged out successfully'})
})


router.post('/subscriber',async(req, res)=>{
    const {email} = req.body
    try{
        let subscriber = await SubscribersModel.create({
            email
        })
        res.json({message: 'Subscriber added successfully', subscriber})
    }
    catch(err){
        res.json({message: 'Failed', subscriber})
    }
})

router.get('/get-fullname', async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, please log in" });
    }

    try {
        // Verify token and get user's ID from it
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid token, please log in again" });
            }

            // Find the user by the ID extracted from the token
            const user = await userModel.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Send the user's full name in the response
            res.status(200).json({ fullname: user.fullname, email:user.email });
        });
    } catch (error) {
        console.error("Error fetching full name:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.post('/contact', async(req, res)=>{
    const {name, email, message} = req.body
    try{
        let contact = await ContactModel.create({
            name, email, message
        })
        res.status(200).json({message: 'Contact added successfully', contact})
    }catch(err){
        res.send(err)
    }
})



module.exports = router;


