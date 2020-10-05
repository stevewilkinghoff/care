//This works - creates api that creates record!!!!


const express = require('express');
const bodyParser = require('body-parser');

//from userapp
const usersRoutes = require('./Users/usersroutes');
const residentRoutes = require('./Users/residentsroute');
const assessmentRoutes = require('./Users/assessmentsroute');
const employeeRoutes = require('./Users/Employees/employeesroute');
const employeeOrientationRoutes = require('./Users/Employees/employeeorientationsroute');
const residentSchema = require('./Users/residentsmodel');
const assessmentSchema = require('./Users/assessmentsmodel');
const employeeSchema = require('./Users/Employees/employeemodel');


const cors = require('cors');

// create express app
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Then use it before your routes are set up:
app.use(cors());

// Setup route to list residents
app.use('/api/listresidents', residentRoutes);
// Setup route to list users
app.use('/api/listusers', usersRoutes);
// Setup route to list assessments
app.use('/api/listassessments', assessmentRoutes);
// Setup route to list employees
app.use('/api/listemployees', employeeRoutes);
// Setup route to list orientation
app.use('/api/listemployeeorientations', employeeOrientationRoutes);

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred'});
});

// Parse requests of content-type - application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(4001, () => {
    console.log("Server is listening on port 4001");
});

// Configuring the database
const dbConfig = require('./config/keys');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Create the model
const NoteSchema = mongoose.Schema({
    date: Date,
    name: String,
    room: String,
    cottage: String,
    shift: String,
    washHands: Boolean,
    washFace: Boolean,
    brushTeeth:Boolean,
    changeAttends:Boolean,
    emptyCatheterBag:Boolean,
    applyCompStockings:Boolean,
    putOnHearingAid:Boolean,
    putOnDeodorantLotion:Boolean,
    putOnCleanClothes:Boolean,
    brushHairGlassesMakeup:Boolean,
    makeBed:Boolean,
    ateBreakfast:String,
    ateLunch:String,
    glassesOfWater:Number,
    recActivity:Boolean
}, {
    timestamps: true
});

// Create model / Schema for Daily Care Checklist - Morning Shift
const MorningDCChecklistSchema = mongoose.Schema({
    date: Date,
    name: String,
    room: String,
    cottage: String,
    shift: String,
    washHands: Boolean,
    washFace: Boolean,
    brushTeeth:Boolean,
    changeAttends:Boolean,
    emptyCatheterBag:Boolean,
    applyCompStockings:Boolean,
    putOnHearingAid:Boolean,
    putOnDeodorantLotion:Boolean,
    putOnCleanClothes:Boolean,
    brushHairGlassesMakeup:Boolean,
    makeBed:Boolean,
    ateBreakfast:String,
    ateLunch:String,
    glassesOfWater:Number,
    recActivity:Boolean
}, {
    timestamps: true
});

// Create model / Schema for Daily Care Checklist - Evening Shift
const EveningDCChecklistSchema = mongoose.Schema({
    date: Date,
    name: String,
    room: String,
    cottage: String,
    shift: String,
    washHands: Boolean,
    washFace: Boolean,
    brushTeethSoakDentures:Boolean,
    removeGlasses: Boolean,
    changeAttends:Boolean,
    emptyCatheterBag:Boolean,
    removeCompStockings:Boolean,
    removeHearAidLockInMedDrawer:Boolean,
    washFacePeriCarePJs:Boolean,
    ateDinner:String,
    glassesOfWater:Number,
    recActivity:Boolean
}, {
    timestamps: true
});

// Create model / Schema for Daily Care Checklist - Night Shift
const NightDCChecklistSchema = mongoose.Schema({
                  date: Date,
                  name: String,
                  room: String,
                  cottage: String,
                  shift: String,
                  repoEvery2to3Hrs: Boolean,
                  changeAttends: Boolean,
                  emptyCatheterBag: Boolean,
                  roundsEvery1to2Hours:Boolean,
                  washWheelchair:Boolean,
                  disinfectLiftsAndWashSlingsSundays:Boolean,
                  restockGlovesWipesClothsAttendsGarbagebags:Boolean
}, {
    timestamps: true
});

// Create model / Schema for Resident
const ResidentSchema = mongoose.residentSchema;
//const ResidentSchema = mongoose.Schema({
//  residentFirstName: String,
//  residentLastName: String,
//  residentMoveInDate: Date,
//  residentDOB: Date,
//  residentCottage: String,
//  residentRoomNo: String,
//  residentAhcNo: String,
//  NOK1FirstName:String,
//  NOK1LastName:String,
//  NOK1PhoneNo:String,
//  NOK1Email:String,
//  doctorName:String,
//  doctorClinic:String,
//  doctorEmail:String,
//  doctorPhone:String,
//  doctorCell:String,
//  doctorAddress:String,
//  doctorCity:String,
//  doctorPostcode:String,
//  nurseFirstName:String,
// nurseLastName:String,
//  nursePhone:String,
//  nurseCell:String,
//  nurseEmail:String,
//  powerOfAttorney:Buffer,
//  photo:Buffer
//}, {
//  timestamps: true
//});

const AssessmentSchema = mongoose.assessmentSchema;//({
//  assessmentDate:Date,
//  assessorFirstName: String,
//  assessorLastName: String,
//  assessorSignature: String,
//  residentMaritalStatus: String,
//  residentLanguage: String,
//  residentLivingArrangement: String,
//  residentAddressStreet: String,
//  residentAddressCity: String,
//  residentAddressProv: String,
//  residentAddressPostCode: String,
//  residentCurrentLocation: String,
//  residentMedicallyStable: String,
//  residentMentalStatus: String,
//  residentOriented: String,
//  residentPOA: String,
//  medicalConditions: String,
//  currentMedication: String,
//  alergies: String,
// familyDoctor: String,
//  residentPhone: String,
//  residentEmail: String,
//  hobbiesAndSpecialInterests: String,
//  eating: String,
//  eatingNotes: String,
//  transfer: String,
//  transferNotes: String,
//  mobilityWalking: String,
//  mobilityWalkingNotes: String,
//  mobilityWheelChair: String,
//  mobilityWheelChairNotes: String,
//  toileting: String,
//  toiletingNotes: String,
//  bathing: String,
//  bathingNotes: String,
//  hygiene: String,
//  hygieneNotes: String,
//  dressing: String,
//  dressingNotes: String,
//  orientationDementia: String,
//  orientationDementiaNotes: String,
//  communicationExpressive: String,
//  communicationExpressiveNotes: String,
//  communicationReceptive: String,
//  communicationReceptiveNotes: String,
//  medicationSelfAdmin: String,
//  medicationSelfAdminNotes: String,
//  behaviours: String,
//  behavioursNotes: String,
//  mentalHealthSubstanceAbuse: String,
//  mentalHealthSubstanceAbuseNotes: String,
//  hearing: String,
//  hearingNotes: String,
//  oralAndVisionCare: String,
//  oralAndVisionCareNotes: String,
//  socialSupport: String,
//  socialSupportNotes: String,
//  assessmentValue: String,
//  assessmentValuePercent: String,
//  skilledNursingServicesPressureUlcer: String,
//  skilledNursingServicesIVHyperal: String,
//  applicantAdheresToMedicalCareYes: String,
//  applicantAdheresToMedicalCareNo: String,
//  assessmentSummary: String,
//  }, {
//timestamps: true
//});

const StaffMemberSchema = mongoose.employeeSchema;//({
//  staffEmploymentDate: Date,
//  staffLocation:String,
//  staffFirstName: String,
//  staffLastName: String,
//  staffPhoto: Buffer,
//  staffPhone: String,
//  staffEmail: String,
//  staffStreetAddress: String,
//  staffCityAddress: String,
//  staffPostcodeAddress: String
//  }, {
//timestamps: true
//});

const StaffOrientationSchema = mongoose.Schema({
  orientHowToCreateOwnAccount:Boolean,
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
  orientDate:Date,
  orientIEmployeeSignOff:Boolean
  }, {
timestamps: true
});


const Note = mongoose.model("Note", NoteSchema, 'testcollection');
const Evening = mongoose.model("Evening", EveningDCChecklistSchema, 'testcollection');
const Night = mongoose.model("Night", NightDCChecklistSchema, 'testcollection');
const Resident = mongoose.model("Resident", ResidentSchema, 'residents');
const Assessment = mongoose.model("Assessment", AssessmentSchema, 'assessments');
const EmployeeAdd = mongoose.model("Employee", StaffMemberSchema, 'employees');
const StaffOrientationAdd = mongoose.model("Orientation", StaffOrientationSchema, 'orientations')


// Create a route for morninglist api posts
app.post('/api/morninglist', (req, res) => {
  console.log(req.body);
  const note = new Note({
    name: req.body.name,
    shift:req.body.shift,
    date:req.body.date,
    cottage:req.body.cottage,
    washFace:req.body.washFace,
    washHands:req.body.washHands,
    brushTeeth: req.body.brushTeeth,
    changeAttends:req.body.changeAttends,
    emptyCatheterBag:req.body.emptyCatheterBag,
    applyCompStockings:req.body.applyCompStockings,
    putOnHearingAid:req.body.putOnHearingAid,
    putOnDeodorantLotion:req.body.putOnDeodorantLotion,
    putOnCleanClothes:req.body.putOnCleanClothes,
    brushHairGlassesMakeup:req.body.brushHairGlassesMakeup,
    makeBed:req.body.makeBed,
    ateBreakfast:req.body.ateBreakfast,
    ateLunch:req.body.ateLunch,
    glassesOfWater:req.body.glassesOfWater,
    recActivity:req.body.recActivity

  });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for eveninglist api posts
app.post('/api/eveninglist', (req, res) => {
  console.log(req.body);
  const note = new Evening({
    name: req.body.name,
    shift:req.body.shift,
    date:req.body.date,
    cottage:req.body.cottage,
    washHands:req.body.washHands,
    brushTeethSoakDentures: req.body.brushTeethSoakDentures,
    removeGlasses: req.body.removeGlasses,
    changeAttends:req.body.changeAttends,
    emptyCatheterBag:req.body.emptyCatheterBag,
    removeCompStockings:req.body.removeCompStockings,
    removeHearAidLockInMedDrawer:req.body.removeHearAidLockInMedDrawer,
    washFacePeriCarePJs:req.body.washFacePeriCarePJs,
    ateDinner:req.body.ateDinner,
    glassesOfWater:req.body.glassesOfWater,
    recActivity:req.body.recActivity

  });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for eveninglist api posts
app.post('/api/nightlist', (req, res) => {
  console.log(req.body);
  const note = new Night({
    name: req.body.name,
    shift:req.body.shift,
    date:req.body.date,
    cottage:req.body.cottage,
    repoEvery2to3Hrs:req.body.repoEvery2to3Hrs,
    changeAttends:req.body.changeAttends,
    emptyCatheterBag:req.body.emptyCatheterBag,
    roundsEvery1to2Hours:req.body.roundsEvery1to2Hours,
    washWheelchair:req.body.washWheelchair,
    disinfectLiftsAndWashSlingsSundays:req.body.disinfectLiftsAndWashSlingsSundays,
    restockGlovesWipesClothsAttendsGarbagebags:req.body.restockGlovesWipesClothsAttendsGarbagebags

  });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for morninglist api posts
app.post('/api/residentadd', (req, res) => {
  console.log(req.body);
  const note = new Resident({
    residentFirstName: req.body.residentFirstName,
    residentLastName:req.body.residentLastName,
    resdidentMoveInDate:req.body.residentMoveInDate,
    residentDOB:req.body.residentDOB,
    residentCottage:req.body.residentCottage,
    residentRoomNo:req.body.residentRoomNo,
    residentAhcNo: req.body.residentAhcNo,
    NOK1FirstName:req.body.NOK1FirstName,
    NOK1LastName:req.body.NOK1LastName,
    NOK1PhoneNo:req.body.NOK1PhoneNo,
    NOK1Email:req.body.NOK1Email,
    doctorName:req.body.doctorName,
    doctorClinic:req.body.doctorClinic,
    doctorEmail:req.body.doctorEmail,
    doctorPhone:req.body.doctorPhone,
    doctorCell:req.body.doctorCell,
    doctorAddress:req.body.doctorAddress,
    doctorCity:req.body.doctorCity,
    doctorPostcode:req.body.doctorPostcode,
    nurseFirstName:req.body.nurseFirstName,
    nurseLastName:req.body.nurseLastName,
    nursePhone:req.body.nursePhone,
    nurseCell:req.body.nurseCell,
    nurseEmail:req.body.nurseEmail,
    powerOfAttorney: req.body.powerOfAttorney,
    photo: req.body.photo

  });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for assessment api posts
app.post('/api/assessmentadd', (req, res) => {
  console.log(req.body);
  const note = new Assessment({
    assessmentDate: req.body.assessmentDate,
    assessorFirstName: req.body.assessorFirstName,
    assessorLastName: req.body.assessorLastName,
    assessorSignature: req.body.assessorSignature,
    residentMaritalStatus: req.body.residentMaritalStatus,
    residentLanguage: req.body.residentLanguage,
    residentLivingArrangement: req.body.residentLivingArrangement,
    residentAddressStreet: req.body.residentAddressStreet,
    residentAddressCity: req.body.residentAddressCity,
    residentAddressProv: req.body.residentAddressProv,
    residentAddressPostCode: req.body.residentAddressPostCode,
    residentCurrentLocation: req.body.residentCurrentLocation,
    residentMedicallyStable: req.body.residentMedicallyStable,
    residentMentalStatus: req.body.residentMentalStatus,
    residentOriented: req.body.residentOriented,
    residentPOA: req.body.residentPOA,
    medicalConditions: req.body.medicalConditions,
    currentMedication: req.body.currentMedication,
    alergies: req.body.alergies,
    familyDoctor: req.body.familyDoctor,
    residentPhone: req.body.residentPhone,
    residentEmail: req.body.residentEmail,
    hobbiesAndSpecialInterests: req.body.hobbiesAndSpecialInterests,
    eating: req.body.eating,
    eatingNotes: req.body.eatingNotes,
    transfer: req.body.transfer,
    transferNotes: req.body.transferNotes,
    mobilityWalking: req.body.mobilityWalking,
    mobilityWalkingNotes: req.body.mobilityWalkingNotes,
    mobilityWheelChair: req.body.mobilityWheelChair,
    mobilityWheelChairNotes: req.body.mobilityWheelChairNotes,
    toileting: req.body.toileting,
    toiletingNotes: req.body.toiletingNotes,
    bathing: req.body.bathing,
    bathingNotes: req.body.bathingNotes,
    hygiene: req.body.hygiene,
    hygieneNotes: req.body.hygieneNotes,
    dressing: req.body.dressing,
    dressingNotes: req.body.dressingNotes,
    orientationDementia: req.body.orientationDementia,
    orientationDementiaNotes: req.body.orientationDementiaNotes,
    communicationExpressive: req.body.communicationExpressive,
    communicationExpressiveNotes: req.body.communicationExpressiveNotes,
    communicationReceptive: req.body.communicationReceptive,
    communicationReceptiveNotes: req.body.communicationReceptiveNotes,
    medicationSelfAdmin: req.body.medicationSelfAdmin,
    medicationSelfAdminNotes: req.body.medicationSelfAdminNotes,
    behaviours: req.body.behaviours,
    behavioursNotes: req.body.behavioursNotes,
    mentalHealthSubstanceAbuse: req.body.mentalHealthSubstanceAbuse,
    mentalHealthSubstanceAbuseNotes: req.body.mentalHealthSubstanceAbuseNotes,
    hearing: req.body.hearing,
    hearingNotes: req.body.hearingNotes,
    oralAndVisionCare: req.body.oralAndVisionCare,
    oralAndVisionCareNotes: req.body.oralAndVisionCareNotes,
    socialSupport: req.body.socialSupport,
    socialSupportNotes: req.body.socialSupportNotes,
    assessmentValue: req.body.assessmentValue,
    assessmentValuePercent: req.body.assessmentValuePercent,
    skilledNursingServicesPressureUlcer: req.body.skilledNursingServicesPressureUlcer,
    skilledNursingServicesIVHyperal: req.body.skilledNursingServicesIVHyperal,
    applicantAdheresToMedicalCareYes: req.body.applicantAdheresToMedicalCareYes,
    applicantAdheresToMedicalCareNo: req.body.applicantAdheresToMedicalCareNo,
    assessmentSummary: req.body.assessmentSummary
    });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for employee add api posts
app.post('/api/employeeadd', (req, res) => {
  console.log(req.body);
  const note = new EmployeeAdd({
    staffEmploymenDate: req.body.staffEmploymenDate,
    staffLocation: req.body.staffLocation,
    staffFirstName: req.body.staffFirstName,
    staffLastName: req.body.staffLastName,
    staffPhone: req.body.staffPhone,
    staffPhoto: req.body.staffPhoto,
    staffEmail: req.body.staffEmail,
    staffStreetAddress: req.body.staffStreetAddress,
    staffCityAddress: req.body.staffCityAddress,
    staffPostcodeAddress: req.body.staffPostcodeAddress

    });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

// Create a route for employee add api posts
app.post('/api/employeeorientation', (req, res) => {
  console.log(req.body);
  const note = new StaffOrientationAdd({
    orientHowToCreateOwnAccount: req.body.orientHowToCreateOwnAccount,
    orientNonDiscNonSolicitNonCompet: req.body.orientNonDiscNonSolicitNonCompet,
    orientOathConf: req.body.orientOathConf,
    orientContractEmployment: req.body.orientContractEmployment,
    orientCertificates: req.body.orientCertificates,
    orientCrimRecordCheck: req.body.orientCrimRecordCheck,
    orientFinancialInfo: req.body.orientFinancialInfo,
    orientIntroToStaffStructure: req.body.orientIntroToStaffStructure,
    orientJobDescrRolesResp: req.body.orientJobDescrRolesResp,
    orientDiversityEquality: req.body.orientDiversityEquality,
    orientDressCode: req.body.orientDressCode,
    orientAccessToCommCarePolsProcs: req.body.orientAccessToCommCarePolsProcs,
    orientAccessRoutes: req.body.orientAccessRoutes,
    orientWashroomHandWashFac: req.body.orientWashroomHandWashFac,
    orientFireExitsAndProc: req.body.orientFireExitsAndProc,
    orientTelephoneAccessPts: req.body.orientTelephoneAccessPts,
    orientFireEvacProc: req.body.orientFireEvacProc,
    orientFireExtSprink: req.body.orientFireExtSprink,
    orientContingPlan: req.body.orientContingPlan,
    orientWaterSafeyProc: req.body.orientWaterSafeyProc,
    orientCompletingHousekeepSafey: req.body.orientCompletingHousekeepSafey,
    orientIntranet: req.body.orientIntranet,
    orientStaffSchedules: req.body.orientStaffSchedules,
    orientStoringPersonalItems: req.body.orientStoringPersonalItems,
    orientTimesheetsPay: req.body.orientTimesheetsPay,
    orientPolRecGifts: req.body.orientPolRecGifts,
    orientDiscAndGrievance: req.body.orientDiscAndGrievance,
    orientProcForReportAbsenceIllness: req.body.orientProcForReportAbsenceIllness,
    orientIndivInfoSheet: req.body.orientIndivInfoSheet,
    orientSuperApprais: req.body.orientSuperApprais,
    orientMentoringArrang: req.body.orientMentoringArrang,
    orientTrainAndDev: req.body.orientTrainAndDev,
    orientProcForReportAndRecordAccIncid: req.body.orientProcForReportAndRecordAccIncid,
    orientFamiliarizeAccIncidDoc: req.body.orientFamiliarizeAccIncidDoc,
    orientNotifOfRelevantPeople: req.body.orientNotifOfRelevantPeople,
    orientFirstAidProv: req.body.orientFirstAidProv,
    orientCarePlansMedCharts: req.body.orientCarePlansMedCharts,
    orientAdminOfMed: req.body.orientAdminOfMed,
    orientAccessToRecsConfidDataProt: req.body.orientAccessToRecsConfidDataProt,
    orientAdultProtPolsProcs: req.body.orientAdultProtPolsProcs,
    orientMovingAndHandling: req.body.orientMovingAndHandling,
    orientOperOfAidsAndHoists: req.body.orientOperOfAidsAndHoists,
    orientSafeFoodHandling: req.body.orientSafeFoodHandling,
    orientInfecControlPPE: req.body.orientInfecControlPPE,
    orientHandwashingTech: req.body.orientHandwashingTech,
    orientStaffFirstName: req.body.orientStaffFirstName,
    orientStaffLastName: req.body.orientStaffLastName,
    orientSuperFirstName: req.body.orientSuperFirstName,
    orientSuperLastName: req.body.orientSuperLastName,
    orientDate: req.body.orientDate,
    orientIEmployeeSignOff: req.body.orientIEmployeeSignOff
    });
  note.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(e);
  })
});

//app.get('/api/listresidents', (req, res, next) => {
//  Resident.find().exec().then((doc) => {
//    console.log('item', doc);
    //console.log(JSON.stringify(doc, undefined, 2));
//  },
  
  
//  (err) => {
//    console.log('Unable to fetch bookstore', err);
//  });
 // });

app.get('/api/listresidents', (req, res, next) => {
    Resident.find().exec().then((doc) => {
            console.log('item', doc);
            res.send(doc);
        },
        (err) => {
          console.log("Some shit just happened", err);
  });
});


  
  
  //res.json({"message": "Fuck Off!"});
//});

  //db.collection('bookstore').findOne({"price":10}).then((doc) => {
  //  console.log('item', doc);
    //console.log(JSON.stringify(doc, undefined, 2));
  //},
  
  
  //(err) => {
  //  console.log('Unable to fetch bookstore', err);
  //});
  //});


  //.exec()
  //.then(docs => {
  //  console.log(docs);
  //  res.status(200).json(docs);
  //})
  //.catch(err => {
  //  console.log(err);
  //  res.status(500).json({
  //    error:err
  //  });
 // });
//});
