const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/isLoggedIn');

router.get('/check-auth', authMiddleware, (req, res) => {
    res.json({ isAuthenticate: req.isAuthenticate });
});

module.exports = router;
