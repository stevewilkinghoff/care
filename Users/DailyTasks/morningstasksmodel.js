const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const MorningTasksSchema = mongoose.Schema({
    taskListDate: Date,
    taskListShift:String,
    taskListStaffName: String,
    taskListCareForResidents: Boolean,
    taskListAdministerMedicine:Boolean,
    taskListScheduledShowersWaterTempTest:Boolean,
    taskListScheduledRoomCleaning:Boolean,
    taskListGrooming:Boolean,
    taskListResidentLaundry:Boolean,
    taskListActivities:Boolean,
    taskListDailyNotes:Boolean,
    taskListPrepBreakfast:Boolean,
    taskListPrepLunch:Boolean,
    taskListPrepSnack:Boolean,
    taskListSanitizeCountersTable:Boolean,
    taskListSaltStepsAndShovel:Boolean,
    taskListEnterMaintNeeded:Boolean,
    taskListCommunicationNoted:Boolean,
    taskListCheckPerimeterForHazards:Boolean,
    taskListCheckPerimeterForMaintNeeded:Boolean,
    taskListCheckDoorsSecured:Boolean,
    taskListSignOff:Boolean



    }, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('MorningTasks', MorningTasksSchema);