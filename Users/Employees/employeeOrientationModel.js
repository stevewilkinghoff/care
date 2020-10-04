const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const EmployeeOrientationSchema = mongoose.Schema({
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

    orientHowToCreateOwnAccount: Boolean,
    orientNonDiscNonSolicitNonCompet:Boolean,
    orientOathConf:Boolean,
    orientContractEmployment:Boolean,
    orientCertificates:Boolean,
    orientCrimRecordCheck:Boolean,
    orientFinancialInfo:Boolean,
    orientIntroToStaffStructure:Boolean,
    orientJobDescrRolesResp:Boolean,
    orientDiversityEquality:Boolean,
    orientDressCode:Boolean,
    orientAccessToCommCarePolsProcs:Boolean,
    orientAccessRoutes:Boolean,
    orientWashroomHandWashFac:Boolean,
    orientFireExitsAndProc:Boolean,
    orientTelephoneAccessPts:Boolean,
    orientFireEvacProc:Boolean,
    orientFireExtSprink:Boolean,
    orientContingPlan:Boolean,
    orientWaterSafeyProc:Boolean,
    orientCompletingHousekeepSafey:Boolean,
    orientIntranet:Boolean,
    orientStaffSchedules:Boolean,
    orientStoringPersonalItems:Boolean,
    orientTimesheetsPay:Boolean,
    orientPolRecGifts:Boolean,
    orientDiscAndGrievance:Boolean,
    orientProcForReportAbsenceIllness:Boolean,
    orientIndivInfoSheet:Boolean,
    orientSuperApprais:Boolean,
    orientMentoringArrang:Boolean,
    orientTrainAndDev:Boolean,
    orientProcForReportAndRecordAccIncid:Boolean,
    orientFamiliarizeAccIncidDoc:Boolean,
    orientNotifOfRelevantPeople:Boolean,
    orientFirstAidProv:Boolean,
    orientCarePlansMedCharts:Boolean,
    orientAdminOfMed:Boolean,
    orientAccessToRecsConfidDataProt:Boolean,
    orientAdultProtPolsProcs:Boolean,
    orientMovingAndHandling:Boolean,
    orientOperOfAidsAndHoists:Boolean,
    orientSafeFoodHandling:Boolean,
    orientInfecControlPPE:Boolean,
    orientHandwashingTech:Boolean,
    orientStaffFirstName:String,
    orientStaffLastName:String,
    orientSuperFirstName:String,
    orientSuperLastName:String,
    orientDate:'Date',
    orientIEmployeeSignOff:Boolean



    }, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('EmployeeOrientation', EmployeeOrientationSchema);