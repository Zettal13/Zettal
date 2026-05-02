const express = require('express');
const router = require('express').Router();
const { getAllUsers, getUsersById, updateUser,getMe,deleteUser, deleteMe, updateMe } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me',auth,getMe)
router.delete('/me',auth,deleteMe)
router.patch('/me',auth,updateMe)
router.get('/',getAllUsers);
router.get('/:id', getUsersById);
router.put('/:id',auth,updateUser);
router.delete('/:id',auth,deleteUser)

module.exports = router;