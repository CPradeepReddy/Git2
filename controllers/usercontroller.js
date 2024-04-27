const bcrypt = require('bcrypt');
const db = require('../config/dbconfig');

/// Controller function to create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if username already exists
    //const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    const sql = `SELECT * FROM users WHERE username = '${username}'`;
 
    executeQuery(sql, function (error, results) {
      if (error) {
        console.error("Error executing query:", error);
        return;
      }
        // Check if any rows were returned
        if (results.length > 0) {
          return res.status(400).json({ message: 'Username already exists' });
        }
      })
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert the user into the database
    await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



// Controller functions for users
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json(results);
  });
};

// Function to execute inline query
function executeQuery(sql, callback) {
  db.query(sql, function (error, results, fields) {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results);
  });
}