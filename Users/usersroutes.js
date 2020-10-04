const express = require('express');
//const { check } = require('express-validator');

const usersController = require('./userscontroller');

const router = express.Router();

router.get('/', usersController.getUsers);

module.exports = router;