const express = require('express');
//const { check } = require('express-validator');

const dailyTasksController = require('./dailytaskcontroller');

const router = express.Router();

router.get('/', dailyTasksController.getDailyTasks);

module.exports = router;