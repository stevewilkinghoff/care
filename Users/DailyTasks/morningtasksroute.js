const express = require('express');
//const { check } = require('express-validator');

const MorningTasksController = require('./morningtaskscontroller');

const router = express.Router();

router.get('/', MorningTasksController.getMorningTasks);

module.exports = router;