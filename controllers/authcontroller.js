const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/dbconfig');

// Controller functions for authentication
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Fetch user from database based on username
  db.query('SELECT * FROM users WHERE username = ?', username, (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const user = results[0];
    // Compare hashed password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
};
