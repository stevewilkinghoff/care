const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const EveningTasksSchema = mongoose.Schema({
    taskListDate: Date,
    taskListShift:String,
    taskListStaffName: String,
    taskListCareForResidents: Boolean,
    taskListAdministerMedicine:Boolean,
    taskListSanitizeCountersTable:Boolean,
    taskListSweepVacMop:Boolean,
    taskListActivityMenuBoards:Boolean,
    taskListCleanSanitizeBathTubToiletCountersMirror: Boolean,
    taskListStockPaperTowelToiletPaperSoaps:Boolean,
    taskListSanitizeDoorKnobsSwitchesCounterTopsEtc: Boolean,
    taskListDoLaundry:Boolean,
    taskListUnloadDishwasher:Boolean,
    taskListCleanKitchen: Boolean,
    taskListEnterMaintNeeded:Boolean,
    taskListCommunicationNoted:Boolean,
    taskListNoteSuppliesNeeded: Boolean,
    taskListDustPicFrames: Boolean,
    taskListCleanOrganizeClosetsAndUnderSinks: Boolean,
    taskListCheckDoorsSecured:Boolean,
    taskListCleanOven: Boolean,
    taskListDustPicFramesPlasticPlants: Boolean,
    taskListSpotCleanWalls:Boolean,
    taskListSignOff:Boolean



    }, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('EveningTasks', EveningTasksSchema);