const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes for users
router.get('/', userController.getAllUsers);
router.post('/NewUser', userController.createUser);

module.exports = router;
