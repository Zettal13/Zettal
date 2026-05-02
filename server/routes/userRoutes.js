const express = require('express');
const router = require('express').Router();
const { getAllUsers, getUsersById, updateUser,getMe,deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me',auth,getMe)
router.get('/',getAllUsers);
router.get('/:id', getUsersById);
router.put('/:id',auth,updateUser);
router.delete('/:id',auth,deleteUser)

module.exports = router;