const express = require('express');
//const { check } = require('express-validator');

const assessmentsController = require('./assessmentscontroller');

const router = express.Router();

router.get('/', assessmentsController.getAssessments);

module.exports = router;