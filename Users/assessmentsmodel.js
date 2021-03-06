const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const AssessmentSchema = mongoose.Schema({

    assessmentDate:Date,
    assessorFirstName: String,
    assessorLastName: String,
    assessorSignature: String,
    residentMaritalStatus: String,
    residentLanguage: String,
    residentLivingArrangement: String,
    residentAddressStreet: String,
    residentAddressCity: String,
    residentAddressProv: String,
    residentAddressPostCode: String,
    residentCurrentLocation: String,
    residentMedicallyStable: String,
    residentMentalStatus: String,
    residentOriented: String,
    residentPOA: String,
    medicalConditions: String,
    currentMedication: String,
    alergies: String,
    familyDoctor: String,
    residentPhone: String,
    residentEmail: String,
    hobbiesAndSpecialInterests: String,
    eating: String,
    eatingNotes: String,
    transfer: String,
    transferNotes: String,
    mobilityWalking: String,
    mobilityWalkingNotes: String,
    mobilityWheelChair: String,
    mobilityWheelChairNotes: String,
    toileting: String,
    toiletingNotes: String,
    bathing: String,
    bathingNotes: String,
    hygiene: String,
    hygieneNotes: String,
    dressing: String,
    dressingNotes: String,
    orientationDementia: String,
    orientationDementiaNotes: String,
    communicationExpressive: String,
    communicationExpressiveNotes: String,
    communicationReceptive: String,
    communicationReceptiveNotes: String,
    medicationSelfAdmin: String,
    medicationSelfAdminNotes: String,
    behaviours: String,
    behavioursNotes: String,
    mentalHealthSubstanceAbuse: String,
    mentalHealthSubstanceAbuseNotes: String,
    hearing: String,
    hearingNotes: String,
    oralAndVisionCare: String,
    oralAndVisionCareNotes: String,
    socialSupport: String,
    socialSupportNotes: String,
    assessmentValue: String,
    assessmentValuePercent: String,
    skilledNursingServicesPressureUlcer: String,
    skilledNursingServiceseIVHyperal: String,
    applicantAdheresToMedicalCare: String,
    assessmentSummary: String,
    }, {
  timestamps: true
});

//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Assessment', AssessmentSchema);