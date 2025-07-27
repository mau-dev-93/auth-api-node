const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const { getProfile } = require('../controllers/userController');

router.get('/profile', validateToken, getProfile)

module.exports = router;