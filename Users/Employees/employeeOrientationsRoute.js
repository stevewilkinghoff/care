const express = require('express');
//const { check } = require('express-validator');

const EmployeeOrientationController = require('./employeeOrientationController');

const router = express.Router();

router.get('/', EmployeeOrientationController.getEmployeeOrientations);

module.exports = router;