const db = require('../config/dbconfig');

// Controller functions for comments
exports.getCommentsByPostId = (req, res) => {
  const postId = req.params.id;
  db.query('SELECT * FROM comments WHERE post_id = ?', postId, (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

exports.addCommentToPost = (req, res) => {
  
  const postId = req.params.id;
 
  const { content, commenter } = req.body;
  db.query('INSERT INTO comments (content, commenter, post_id) VALUES (?, ?, ?)', [content, commenter, postId], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Comment added successfully', commentId: results.insertId });
 
  });
};

exports.updateComment = (req, res) => {
  const commentId = req.params.id;
  const { content } = req.body;
  db.query('UPDATE comments SET content = ? WHERE id = ?', [content, commentId], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment updated successfully' });
  });
};

exports.deleteComment = (req, res) => {
  const commentId = req.params.id;
  db.query('DELETE FROM comments WHERE id = ?', commentId, (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  });
};
