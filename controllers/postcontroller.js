const db = require('../config/dbconfig');

// Controller functions for posts
exports.getAllPosts = (req, res) => {
  db.query('SELECT * FROM posts', (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

exports.getPostById = (req, res) => {
  const postId = req.params.id;
  db.query('SELECT * FROM posts WHERE id = ?', postId, (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(results[0]);
  });
};

exports.createPost = (req, res) => {
  const { title, content, sender } = req.body;
  db.query('INSERT INTO posts (title, content, sender) VALUES (?, ?, ?)', [title, content, sender], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Post created successfully', postId: results.insertId });
  });
};

exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, postId], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post updated successfully' });
  });
};
