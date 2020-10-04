const express = require('express');
//const { check } = require('express-validator');

const EmployeeController = require('./employeecontroller');

const router = express.Router();

router.get('/', EmployeeController.getEmployees);

module.exports = router;