const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes for posts
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.patch('/:id', postController.updatePost);

module.exports = router;
