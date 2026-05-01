const express = require('express');
const router = require('express').Router();
const { getAllUsers, getUsersById, updateUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/',getAllUsers);
router.get('/:id', getUsersById);
router.put('/:id',auth,updateUser);

module.exports = router;