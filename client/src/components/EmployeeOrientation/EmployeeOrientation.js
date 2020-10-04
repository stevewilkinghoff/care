import React from 'react';
import axios from 'axios';
import { useFormik, Form, Formik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
                    orientHowToCreateOwnAccount:false,
                    orientNonDiscNonSolicitNonCompet:false,
                    orientOathConf:false,
                    orientContractEmployment:false,
                    orientCertificates:false,
                    orientCrimRecordCheck:false,
                    orientFinancialInfo:false,
                    orientIntroToStaffStructure:false,
                    orientJobDescrRolesResp:false,
                    orientDiversityEquality:false,
                    orientDressCode:false,
                    orientAccessToCommCarePolsProcs:false,
                    orientAccessRoutes:false,
                    orientWashroomHandWashFac:false,
                    orientFireExitsAndProc:false,
                    orientTelephoneAccessPts:false,
                    orientFireEvacProc:false,
                    orientFireExtSprink:false,
                    orientContingPlan:false,
                    orientWaterSafeyProc:false,
                    orientCompletingHousekeepSafey:false,
                    orientIntranet:false,
                    orientStaffSchedules:false,
                    orientStoringPersonalItems:false,
                    orientTimesheetsPay:false,
                    orientPolRecGifts:false,
                    orientDiscAndGrievance:false,
                    orientProcForReportAbsenceIllness:false,
                    orientIndivInfoSheet:false,
                    orientSuperApprais:false,
                    orientMentoringArrang:false,
                    orientTrainAndDev:false,
                    orientProcForReportAndRecordAccIncid:false,
                    orientFamiliarizeAccIncidDoc:false,
                    orientNotifOfRelevantPeople:false,
                    orientFirstAidProv:false,
                    orientCarePlansMedCharts:false,
                    orientAdminOfMed:false,
                    orientAccessToRecsConfidDataProt:false,
                    orientAdultProtPolsProcs:false,
                    orientMovingAndHandling:false,
                    orientOperOfAidsAndHoists:false,
                    orientSafeFoodHandling:false,
                    orientInfecControlPPE:false,
                    orientHandwashingTech:false,
                    orientStaffFirstName:'',
                    orientStaffLastName:'',
                    orientSuperFirstName:'',
                    orientSuperLastName:'',
                    orientDate:'',
                    orientIEmployeeSignOff:false
                    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
        const staffEmploymentDate = values.staffEmploymentDate;
        const staffLocation = values.staffLocation;
        const staffFirstName = values.staffFirstName;
        const staffLastName = values.staffLastName;
        const staffPhone = values.staffPhone;
        const staffPhoto = values.staffPhoto;
        const staffEmail = values.staffEmail;
        const staffStreetAddress = values.staffStreetAddress;
        const staffCityAddress = values.staffCityAddress;
        const staffPostcodeAddress = values.staffPostcodeAddress;

        const orientHowToCreateOwnAccount = values.orientHowToCreateOwnAccount;
        const orientNonDiscNonSolicitNonCompet = values.orientNonDiscNonSolicitNonCompet;
        const orientOathConf = values.orientOathConf;
        const orientContractEmployment = values.orientContractEmployment;
        const orientCertificates = values.orientCertificates;
        const orientCrimRecordCheck = values.orientCrimRecordCheck;
        const orientFinancialInfo = values.orientFinancialInfo;
        const orientIntroToStaffStructure = values.orientIntroToStaffStructure;
        const orientJobDescrRolesResp = values.orientJobDescrRolesResp;
        const orientDiversityEquality = values.orientDiversityEquality;
        const orientDressCode = values.orientDressCode;
        const orientAccessToCommCarePolsProcs = values.orientAccessToCommCarePolsProcs;
        const orientAccessRoutes = values.orientAccessRoutes;
        const orientWashroomHandWashFac = values.orientWashroomHandWashFac;
        const orientFireExitsAndProc = values.orientFireExitsAndProc;
        const orientTelephoneAccessPts = values.orientTelephoneAccessPts;
        const orientFireEvacProc = values.orientFireEvacProc;
        const orientFireExtSprink = values.orientFireExtSprink;
        const orientContingPlan = values.orientContingPlan;
        const orientWaterSafeyProc = values.orientWaterSafeyProc;
        const orientCompletingHousekeepSafey = values.orientCompletingHousekeepSafey;
        const orientIntranet = values.orientIntranet;
        const orientStaffSchedules = values.orientStaffSchedules;
        const orientStoringPersonalItems = values.orientStoringPersonalItems;
        const orientTimesheetsPay = values.orientTimesheetsPay;
        const orientPolRecGifts = values.orientPolRecGifts;
        const orientDiscAndGrievance = values.orientDiscAndGrievance;
        const orientProcForReportAbsenceIllness = values.orientProcForReportAbsenceIllness;
        const orientIndivInfoSheet = values.orientIndivInfoSheet;
        const orientSuperApprais = values.orientSuperApprais;
        const orientMentoringArrang = values.orientMentoringArrang;
        const orientTrainAndDev = values.orientTrainAndDev;
        const orientProcForReportAndRecordAccIncid = values.orientProcForReportAndRecordAccIncid;
        const orientFamiliarizeAccIncidDoc = values.orientFamiliarizeAccIncidDoc;
        const orientNotifOfRelevantPeople = values.orientNotifOfRelevantPeople;
        const orientFirstAidProv = values.orientFirstAidProv;
        const orientCarePlansMedCharts = values.orientCarePlansMedCharts;
        const orientAdminOfMed = values.orientAdminOfMed;
        const orientAccessToRecsConfidDataProt = values.orientAccessToRecsConfidDataProt;
        const orientAdultProtPolsProcs = values.orientAdultProtPolsProcs;
        const orientMovingAndHandling = values.orientMovingAndHandling;
        const orientOperOfAidsAndHoists = values.orientOperOfAidsAndHoists;
        const orientSafeFoodHandling = values.orientSafeFoodHandling;
        const orientInfecControlPPE = values.orientInfecControlPPE;
        const orientHandwashingTech = values.orientHandwashingTech;
        const orientStaffFirstName = values.orientStaffFirstName;
        const orientStaffLastName = values.orientStaffLastName;
        const orientSuperFirstName = values.orientSuperFirstName;
        const orientSuperLastName = values.orientSuperLastName;
        const orientDate = values.orientDate;
        const orientIEmployeeSignOff = values.orientIEmployeeSignOff;
              
        axios({
          method: "POST",
          url: "http://localhost:4001/api/employeeorientation",
          data: values
        })
      //.then(res => {
      //  console.log(res); // this returns the callback from the post
      //  console.log(values);  // this returns all the values from form
      }
    })

    // now test sending name and email to a route created that will return the data to screen
    // this is a test to be able to see if we can post to database

    const ContainerStyle = {
      display: 'flex',
      alignContent: 'space-around',
      justifyContent: 'space-between',
      alignSelf: 'flex-start'
   }

   const RowStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
   }

   const ItemStyle = {
    display: 'flex', 
    paddingRight:30,
    spacing: 5,
    align:'right',
    alignContent: 'space-around',
    justifyContent:'flex-end'
   }

   const NameStyle = {
    display: 'flex', 
    paddingRight:30,
    spacing: 5
   }

  return (
    <>
    <h3>Employee Orientation Checklist</h3>
    <form onSubmit={formik.handleSubmit}>
    
    <hr/>
      <Row>
        <h5>Staff Name</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>First Name</label>
      <input
        id="orientStaffFirstName"
        name="orientStaffFirstName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.orientStaffFirstName}
        />
        </Col>
      <Col>
      <label style={NameStyle}>Last Name</label>
      <input
        id="orientStaffLastName"
        name="orientStaffLastName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.orientStaffLastName}
        />
        </Col>
        <Col/>
        <Col/>
        </Row>

    <hr/>
      <Row>
        <h5>Supervisor Name</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>First Name</label>
      <input
        id="orientSuperFirstName"
        name="orientSuperFirstName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.orientSuperFirstName}
        />
        </Col>
      <Col>
      <label style={NameStyle}>Last Name</label>
      <input
        id="orientSuperLastName"
        name="orientSuperLastName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.orientSuperLastName}
        />
        </Col>
        <Col/>
        <Col/>
        </Row>
     
     <hr/>
      <Row>
        <h5>Application Process Steps</h5>
      </Row>
      <Row>
      <input
        id="orientHowtoCreateOwnAccount"
        name="orientHowToCreateOwnAccount"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Shown how to create my own my.carecottages.ca account</p>
      </Row>

     <Row>
      <input
        id="orientNonDiscNonSolicitNonCompet"
        name="orientNonDiscNonSolicitNonCompet"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Non-Disclosure, Non-Solicitation, and Non-Competition Agreement</p>
      </Row>

      <Row>
      <input
        id="orientOathConf"
        name="orientOathConf"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Oath of Confidentiality</p>
      </Row>

      <Row>
      <input
        id="orientContractEmployment"
        name="orientContractEmployment"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Contract of Employment</p>
      </Row>

      <Row>
      <input
        id="orientCertificates"
        name="orientCertificates"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Certificates</p>
      </Row>

      <Row>
      <input
        id="orientCrimRecordCheck"
        name="orientCrimRecordCheck"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Criminal Record Check</p>
      </Row>

      <Row>
      <input
        id="orientFinancialInfo"
        name="orientFinancialInfo"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Financial Information</p>
      </Row>

      <hr/>
      <Row>
        <h5>Introduction To The Company, this Job Role And The Team</h5>
      </Row>
      <Row>
      <input
        id="orientIntroToStaffStructure"
        name="orientIntroToStaffStructure"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Introduce to staff structure including areas of responsibility and staff on duty</p>
      </Row>

      <Row>
      <input
        id="orientJobDescrRolesResp"
        name="orientJobDescrRolesResp"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Job description roles and responsibilities</p>
      </Row>

      <Row>
      <input
        id="orientDiversityEquality"
        name="orientDiversityEquality"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Diversity and Equality</p>
      </Row>

      <Row>
      <input
        id="orientDressCode"
        name="orientDressCode"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Dress code</p>
      </Row>

      <hr/>
      <Row>
        <h5>Introduction to the Cottage</h5>
      </Row>
      <Row>
      <input
        id="orientAccessToCommCarePolsProcs"
        name="orientAccessToCommCarePolsProcs"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Access to Community Care Cottages Policies and Procedures</p>
      </Row>

      <Row>
      <input
        id="orientAccessRoutes"
        name="orientAccessRoutes"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Access routes</p>
      </Row>

      <Row>
      <input
        id="orientWashroomHandWashFac"
        name="orientWashroomHandWashFac"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Washroom and hand washing facilities for staff members</p>
      </Row>

      <Row>
      <input
        id="orientFireExitsAndProc"
        name="orientFireExitsAndProc"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Fire exits and procedures in the event of a fire</p>
      </Row>

      <Row>
      <input
        id="orientTelephoneAccessPts"
        name="orientTelephoneAccessPts"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Telephone access points</p>
      </Row>

      <Row>
      <input
        id="orientFireEvacProc"
        name="orientFireEvacProc"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Fire evacuation procedure</p>
      </Row>

      <Row>
      <input
        id="orientFireExtSprink"
        name="orientFireExtSprink"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Fire extinguishers and sprinkler system</p>
      </Row>

      <Row>
      <input
        id="orientContingPlan"
        name="orientContingPlan"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Contingency plan</p>
      </Row>

      <Row>
      <input
        id="orientWaterSafetyProc"
        name="orientWaterSafetyProc"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Water safety procedures</p>
      </Row>

      <Row>
      <input
        id="orientCompletingHousekeepSafety"
        name="orientCompletingHousekeepSafety"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Completing housekeeping and safety checklist</p>
      </Row>

      <hr/>
      <Row>
        <h5>Personal Matters</h5>
      </Row>
      <Row>
      <input
        id="orientIntranet"
        name="orientIntranet"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>my.carecottages.ca (Intranet)</p>
      </Row>

      <Row>
      <input
        id="orientStaffSchedules"
        name="orientStaffSchedules"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Staff schedules</p>
      </Row>

      <Row>
      <input
        id="orientStoringPersonalItems"
        name="orientStoringPersonalItems"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Storing personal items while at work - bags, coats, etc.</p>
      </Row>

      <Row>
      <input
        id="orientTimesheetsPay"
        name="orientTimesheetsPay"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Time sheets and pay arrangements</p>
      </Row>

      <Row>
      <input
        id="orientPolRecGifts"
        name="orientPolRecGifts"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Policy on receiving gifts</p>
      </Row>

      <Row>
      <input
        id="orientDiscAndGrievance"
        name="orientDiscAndGrievance"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Disciplinary and grievance procedures</p>
      </Row>

      <Row>
      <input
        id="orientProcForReportAbsenceIllness"
        name="orientProcForReportAbsenceIllness"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Procedures for reporting absences due to illness or family emergency</p>
      </Row>

      <Row>
      <input
        id="orientIndivInfoSheet"
        name="orientIndivInfoSheet"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Individual information sheet</p>
      </Row>

      <hr/>
      <Row>
        <h5>Personal Development</h5>
      </Row>
      <Row>
      <input
        id="orientSuperApprais"
        name="orientSuperApprais"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Supervision and appraisal arrangements</p>
      </Row>

      <Row>
      <input
        id="orientMentoringArrang"
        name="orientMentoringArrang"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Mentoring arrangements</p>
      </Row>

      <Row>
      <input
        id="orientTrainAndDev"
        name="orientTrainAndDev"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Training and ongoing personal development</p>
      </Row>

      <hr/>
      <Row>
        <h5>Accident / Challenging Behaviour Procedure</h5>
      </Row>
      <Row>
      <input
        id="orientProcForReportAndRecordAccIncid"
        name="orientProcForReportAndRecordAccIncid"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Procedure for reporting and recording an accident, untoward occurrence or challenging behaviour</p>
      </Row>

      <Row>
      <input
        id="orientFamiliarizeAccIncidDoc"
        name="orientFamiliarizeAccIncidDoc"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Familiarize with accident/incident documentation</p>
      </Row>

      <Row>
      <input
        id="orientNotifOfRelevantPeople"
        name="orientNotifOfRelevantPeople"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Notification of relevant people</p>
      </Row>

      <Row>
      <input
        id="orientFirstAidProv"
        name="orientFirstAidProv"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>First Aid provision</p>
      </Row>

      <hr/>
      <Row>
        <h5>Personal Development</h5>
      </Row>
      <Row>
      <input
        id="orientSuperApprais"
        name="orientSuperApprais"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Supervision and appraisal arrangements</p>
      </Row>

      <Row>
      <input
        id="orientMentoringArrang"
        name="orientMentoringArrang"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Mentoring arrangements</p>
      </Row>

      <Row>
      <input
        id="orientTrainAndDev"
        name="orientTrainAndDev"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Training and ongoing personal development</p>
      </Row>

      <hr/>
      <Row>
        <h5>Resident Care Needs</h5>
      </Row>
      <Row>
      <input
        id="orientCarePlansMedCharts"
        name="orientCarePlansMedCharts"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Care Plans / Medical Charts</p>
      </Row>

      <Row>
      <input
        id="orientAdminOfMed"
        name="orientAdminOfMed"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Administrator of medication</p>
      </Row>

      <Row>
      <input
        id="orientAccessToRecsConfidDataProt"
        name="orientAccessToRecsConfidDataProt"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Access to records, confidentiality and data protection</p>
      </Row>

      <Row>
      <input
        id="orientAdultProtPolsProcs"
        name="orientAdultProtPolsProcs"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Adult protection policies and procedures</p>
      </Row>

      <Row>
      <input
        id="orientMovingAndHandling"
        name="orientMovingAndHandling"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Moving and handling procedures</p>
      </Row>

      <Row>
      <input
        id="orientOperOfAidsAndHoists"
        name="orientOperOfAidsAndHoists"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Operation of manual aids, bath hoist, portable hoist, toilet</p>
      </Row>

      <Row>
      <input
        id="orientSafeFoodHandling"
        name="orientSafeFoodHandling"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Safe food handling</p>
      </Row>

      <Row>
      <input
        id="orientInfecControlPPE"
        name="orientInfecControlPPE"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Infection control P.P.E.</p>
      </Row>

      <Row>
      <input
        id="orientHandwashingTech"
        name="orientHandwashingTech"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Hand washing technique and hand gel use</p>
      </Row>

      <hr/>
      <Row>
        <h5>Employee Certification</h5>
      </Row>
      <Row>
      <input
        id="orientEmployeeSignOff"
        name="orientEmployeeSignOff"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>I have received proper work orientation for the items above I've indicated above</p>
      </Row>

      <Row>
      <input
        id="orientDate"
        name="orientDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        <p style={RowStyle}>Date</p>
      </Row>


        

     
      
        
        <div/>
        <div>
          <hr/>
          <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

function EmployeeOrientation() {
  return <SignupForm />;
}

export default EmployeeOrientation;
