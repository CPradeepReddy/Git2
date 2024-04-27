const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentcontroller');

// Routes for comments
router.get('/comments/:id', commentController.getCommentsByPostId);
router.post('/comments/:id', commentController.addCommentToPost);
router.patch('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
