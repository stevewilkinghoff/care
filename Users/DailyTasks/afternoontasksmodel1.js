const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const AfternoonTasksSchema = mongoose.Schema({
    taskListDate: Date,
    taskListShiftShift: String,
    taskListStaffName: String,
    taskListCareForResidents:{name:"Care for residents", type:Boolean, value:true},
    taskListAdministerMedicine:Boolean,
    taskListScheduledShowersWaterTempTest:Boolean,
    taskListScheduledRoomCleaning:Boolean,
    taskListGrooming:Boolean,
    taskListResidentLaundry:Boolean,
    taskListActivities:Boolean,
    taskListDailyNotes:Boolean,
    taskListPrepDinner:Boolean,
    taskListPrepLunch:Boolean,
    taskListSanitizeCountersTable:Boolean,
    taskListSweepVacMop:Boolean,
    taskListCleanSanitizeBathTubToiletCountersMirror:Boolean,
    taskListStockPaperTowerToiletPaperSoaps:Boolean,
    taskListCommunicationNoted:Boolean,
    taskListCheckDoorsSecured:Boolean,
    taskListDoLaundry:Boolean,
    taskListUnloadDishwasher:Boolean,
    taskListEnterMaintNeeded:Boolean,
    taskListCommunicationNoted:Boolean,
    taskListCommunicationBookTexted:Boolean,
    taskListCleanOrganizeFridge:Boolean,
    taskListWashThrowsBlankets:Boolean,
    taskListSignOff:Boolean



    }, {
  timestamps: true
});

module.exports = mongoose.model('AfternoonTasks', AfternoonTasksSchema);