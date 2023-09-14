
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      // Password comparison
      const token = jwt.sign({ user_id: user.user_id, email: user.email }, 'your-secret-key', {
        expiresIn: '1h', // Token expiration time
      });

      res.json({ success: true, token, user_id: user.user_id });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
};

module.exports = { login };
