const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./users');

// API Routes
router.use('/api', apiRoutes);
router.use('/user', userRoutes);

// If no API send back to Home
router.use((req, res) =>
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;