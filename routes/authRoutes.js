const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

// Routes for authentication
router.post('/login', authController.login);

module.exports = router;
