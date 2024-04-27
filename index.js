const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../Final Project/routes/userRoutes');
const authRoutes = require('../Final Project/routes/authRoutes');
const postRoutes = require('../Final Project/routes/postRoutes');
const commentRoutes = require('../Final Project/routes/commentRoutes');


const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/login', authRoutes);
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;