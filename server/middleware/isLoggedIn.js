const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next)=>{
    const {token} = req.cookies;
    
    if (!token) {
        req.isAuthenticate = false; // Set as unauthenticated
        return next();
    }
    
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                req.isAuthenticate = false; 
            } else {
                req.isAuthenticate = true; 
                req.user = decoded;
            }
            next();
        });
    
}
module.exports = authMiddleware;