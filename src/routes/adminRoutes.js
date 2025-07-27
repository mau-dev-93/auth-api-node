const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const { getUsers } = require('../controllers/adminController');
const authorizeRole = require('../middlewares/authorizeRole');
const roleCatalog = require('../constants/roleCatalog');

router.get('/users', validateToken, authorizeRole(roleCatalog.admin), getUsers)

module.exports = router;