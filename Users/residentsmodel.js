const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ResidentSchema = mongoose.Schema({
  residentFirstName: String,
  residentLastName: String,
  residentMoveInDate: Date,
  residentDOB: Date,
  residentCottage: String,
  residentRoomNo: String,
  residentAhcNo: String,
  NOK1FirstName:String,
  NOK1LastName:String,
  NOK1PhoneNo:String,
  NOK1Email:String,
  doctorName:String,
  doctorClinic:String,
  doctorEmail:String,
  doctorPhone:String,
  doctorCell:String,
  doctorAddress:String,
  doctorCity:String,
  doctorPostcode:String,
  nurseFirstName:String,
  nurseLastName:String,
  nursePhone:String,
  nurseCell:String,
  nurseEmail:String,
  powerOfAttorney:Buffer,
  photo:Buffer
}, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Resident', ResidentSchema);