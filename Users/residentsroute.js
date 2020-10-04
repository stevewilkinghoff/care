const express = require('express');
//const { check } = require('express-validator');

const residentsController = require('./residentscontroller');

const router = express.Router();

router.get('/', residentsController.getResidents);

module.exports = router;