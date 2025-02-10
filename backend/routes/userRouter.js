const express = require('express');
const { getUsers, addUser, updateUser, getUserById, deleteUser, authUser, logout } = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getUsers).post(addUser);
router.route('/:id').get(protect, getUserById).put(protect, updateUser).delete(deleteUser);
router.post('/authUser', authUser);
router.post('/logout', logout);

module.exports = router;