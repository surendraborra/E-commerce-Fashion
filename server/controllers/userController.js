
const bcrypt = require('bcrypt');
const User = require('../models/User');
async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check for null values
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email follows Gmail format
    const isGmail = email.endsWith('@gmail.com');
    if (!isGmail) {
      return res.status(400).json({ message: 'Invalid email format. Only Gmail addresses are allowed' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
}


async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
}

async function getUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
}
async function updateUserById(req, res) {
  const userId = req.params.id;
  const { username, email, address, mobile_number } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare the update data
    const updateData = {};
    if (username) {
      updateData.username = username;
    }
    if (email) {
      updateData.email = email;
    }
    if (address) {
      updateData.address = address;
    }
    if (mobile_number) {
      updateData.mobile_number = mobile_number;
    }

    // Perform the update
    await user.update(updateData, { fields: ['username', 'email', 'address', 'mobile_number'] });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
}


async function deleteUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
}

async function resetPassword(req, res) {
  const { email, newPassword } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password before saving it
    const saltRounds = 10; // Adjust this according to your security needs
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password with the hashed password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function checkEmail(req, res) {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (user) {
      // Email exists
      res.status(200).json({ exists: true });
    } else {
      // Email not found
      res.status(404).json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ message: 'An error occurred while checking the email' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  resetPassword,
  checkEmail,
};
