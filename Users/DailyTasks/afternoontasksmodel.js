const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const AfternoonTasksSchema = mongoose.Schema({
    taskListDate: Date,
    taskListShift:String,
    taskListStaffName:String,
    taskListCareForResidents:{
        name: "Care for residents",
        type: Schema.Types.Mixed,
        value: false},
    taskListAdministerMedicine:{
        name: "Administer medicine",
        type: Schema.Types.Mixed,
        value: false},
    taskListScheduledShowersWaterTempTest:{
        name: "Scheduled showers and water temp test",
        type: Schema.Types.Mixed,
        value: false},
    taskListScheduledRoomCleaning:{
      name: "Scheduled cleaning",
      type: Schema.Types.Mixed,
      value: false},
    taskListGrooming:{
      name: "Grooming",
      type: Schema.Types.Mixed,
      value: false},
    taskListResidentLaundry:{
      name: "Resident laundry (clean lint trap)",
      type: Schema.Types.Mixed,
      value: false},
    taskListActivities:{
      name: "Activities",
      type: Schema.Types.Mixed,
      value: false},
    taskListDailyNotes:{
      name: "Daily notes",
      type: Schema.Types.Mixed,
      value: false},
    taskListPrepDinner:{
      name: "Prepare dinner",
      type: Schema.Types.Mixed,
      value: false},
    taskListPrepLunch:Boolean,
    taskListSanitizeCountersTable:{
      name: "Sanitize counters and table",
      type: Schema.Types.Mixed,
      value: false},
    taskListSweepVacMop:{
      name: "Sweep, vacuum and mop floors",
      type: Schema.Types.Mixed,
      value: false},
    taskListCleanSanitizeBathTubToiletCountersMirror:{
      name: "Clean and sanitize bathrooms, tub, toilet, counters, mirror",
      type: Schema.Types.Mixed,
      value: false},
    taskListStockPaperTowerToiletPaperSoaps:{
      name: "Stock paper towel, toilet paper, refill soaps",
      type: Schema.Types.Mixed,
      value: false},
      taskListCheckDoorsSecured:{
        name: "Check doors (secured)",
        type: Schema.Types.Mixed,
        value: false},
      taskListDoLaundry:{
        name: "Do laundry (clean lint trap)",
        type: Schema.Types.Mixed,
        value: false},
      taskListUnloadDishwasher:{
        name: "Unload dishwasher (if needed)",
        type: Schema.Types.Mixed,
        value: false},
      taskListEnterMaintNeeded:{
        name: "Enter maintenance needed",
        type: Schema.Types.Mixed,
        value: false},
    taskListCommunicationNoted:{
      name: "Communication noted",
      type: Schema.Types.Mixed,
      value: false},
    taskListCommunicationBookTexted:{
      name: "Communication book texted",
      type: Schema.Types.Mixed,
      value: false},
    taskListCleanOrganizeFridge:{
      name: "Clean and organize fridge",
      type: Schema.Types.Mixed,
      value: false},
    taskListWashThrowsBlankets:{
      name: "Wash throws & blankets",
      type: Schema.Types.Mixed,
      value: false},
    taskListSignOff:Boolean



    }, {
  timestamps: true
});

module.exports = mongoose.model('AfternoonTasks', AfternoonTasksSchema);