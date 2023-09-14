
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/create', userController.createUser);

router.get('/getAllUsers', userController.getAllUsers);

router.get('/getUser/:id', userController.getUserById);

router.put('/updateUser/:id', userController.updateUserById);

router.delete('/deleteUser/:id', userController.deleteUserById);

router.post('/resetpassword',userController.resetPassword);
router.post('/checkemail', userController.checkEmail);

module.exports = router;
