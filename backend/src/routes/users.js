const express = require('express');

const userController = require('../controllers/userController');
const auth = require('../middleware/auth');


const router = new express.Router();

// routes list for user
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/logout',  auth.simple, userController.logoutUser);
router.post('/logoutAll', auth.enhance, userController.logoutAll);
router.get('/', auth.enhance, userController.getAllUser);
router.get('/me', auth.simple, userController.userInfo);
router.get('/:id', auth.enhance, userController.getUserInfoById);
router.patch('/me', auth.simple, userController.updateUser);
router.patch('/:id', auth.enhance, userController.updateById);
router.delete('/:id', auth.enhance, userController.deleteById);
router.delete('/me', auth.simple, userController.deleteGod);


module.exports = router;