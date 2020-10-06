const express = require('express');
//const { check } = require('express-validator');

const EmployeeOrientationController = require('./employeeorientationcontroller');

const router = express.Router();

router.get('/', EmployeeOrientationController.getEmployeeOrientations);

module.exports = router;