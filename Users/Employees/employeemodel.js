const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const EmployeeSchema = mongoose.Schema({

    staffEmploymentDate: Date,
    staffLocation:String,
    staffFirstName: String,
    staffLastName: String,
    staffPhoto: Buffer,
    staffPhone: String,
    staffEmail: String,
    staffStreetAddress: String,
    staffCityAddress: String,
    staffPostcodeAddress: String,
    }, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Employee', EmployeeSchema);