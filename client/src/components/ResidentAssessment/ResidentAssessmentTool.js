import React from 'react';
import axios from 'axios';
import { useFormik, Form, Formik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CalculatedField from './AssessmentValue'
import CalculatedField1 from './AssessmentValuePercent'
import Sig from './AssessorSignature'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {assessmentDate:"",
                    residentFirstName:"",
                    residentLastName:"",
                    assessorFirstName:"",
                    assessorLastName:"",
                    assessorSignature:"",
                    residentMaritalStatus:"",
                    residentLanguage:"",
                    residentLivingArrangement:"",
                    residentAddressStreet:"",
                    residentAddressCity:"",
                    residentAddressProv:"",
                    residentAddressPostCode:"",
                    residentCurrentLocation:"",
                    residentMedicallyStable:"",
                    residentMentalStatus:"",
                    residentOrientedPerson:"",
                    residentOrientedPlace:"",
                    residentOrientedTime:"",
                    residentOrientedOccConfused:"",
                    residentPOA:"",
                    medicalConditions:"",
                    currentMedication:"",
                    alergies:"",
                    familyDoctor:"",
                    familyDoctorPhone:"",
                    familyDoctorEmail:"",
                    hobbiesAndSpecialInterests:"",
                    eating:"",
                    eatingNotes:"",
                    transfer:"",
                    transferNotes:"",
                    mobilityWalking:"",
                    mobilityWalkingNotes:"",
                    mobilityWheelChair:"",
                    mobilityWheelChairNotes:"",
                    toileting:"",
                    toiletingNotes:"",
                    bathing:"",
                    bathingNotes:"",
                    hygiene:"",
                    hygieneNotes:"",
                    dressing:"",
                    dressingNotes:"",
                    orientationDementia:"",
                    orientationDementiaNotes:"",
                    communicationExpressive:"",
                    communicationExpressiveNotes:"",
                    communicationReceptive:"",
                    communicationReceptiveNotes:"",
                    medicationSelfAdmin:"",
                    medicationSelfAdminNotes:"",
                    behaviours:"",
                    behavioursNotes:"",
                    mentalHealthSubstanceAbuse:"",
                    mentalHealthSubstanceAbuseNotes:"",
                    hearing:"",
                    hearingNotes:"",
                    oralAndVisionCare:"",
                    oralAndVisionCareNotes:"",
                    socialSupport:"",
                    socialSupportNotes:"",
                    assessmentValue:"",
                    assessmentValuePercent:"",
                    skilledNursingServicesPressureUlcer:"",
                    skilledNursingServicesIVHyperal:"",
                    applicantAdheresToMedicalCareYes:"",
                    appicantAdheresToMedicalCareNo:"",
                    assessmentSummary:""
                    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
        const residentFirstName = values.residentFirstName;
        const residentLastName = values.residentLastName;
        const assessmentDate = values.assessmentDate;
        const assessorFirstName = values.assessorFirstName;
        const assessorLastName = values.assessorLastName;
        const assessorSignature = values.assessorSignature;
        const residentMaritalStatus = values.residentMaritalStatus;
        const residentLanguage = values.residentLanguage;
        const residentLivingArrangement = values.residentLivingArrangement;
        const residentAddressStreet = values.residentAddressStreet;
        const residentAddressCity = values.residentAddressCity;
        const residentAddressProv = values.residentAddressProv;
        const residentAddressPostCode = values.residentAddressPostCode;
        const residentCurrentLocation = values.residentCurrentLocation;
        const residentMedicallyStable = values.residentMedicallyStable;
        const residentMentalStatus = values.residentMentalStatus;
        const residentOrientedPerson = values.residentOrientedPerson;
        const residentOrientedPlace = values.residentOrientedPlace;
        const residentOrientedTime = values.residentOrientedTime;
        const residentOrientedOccConfused = values.residentOrientedOccConfused;
        const residentPOA = values.residentPOA;
        const medicalConditions = values.medicalConditions;
        const currentMedication = values.currentMedication;
        const alergies = values.alergies;
        const familyDoctor = values.familyDoctor;
        const familyDoctorPhone = values.residentPhone;
        const familyDoctorEmail = values.residentEmail;
        const hobbiesAndSpecialInterests = values.hobbiesAndSpecialInterests;
        const eating = values.eating;
        const eatingNotes = values.eatingNotes;
        const transfer = values.transfer;
        const transferNotes = values.transferNotes;
        const mobilityWalking = values.mobilityWalking;
        const mobilityWalkingNotes = values.mobilityWalkingNotes;
        const mobilityWheelChair = values.mobilityWheelChair;
        const mobilityWheelChairNotes = values.mobilityWheelChairNotes;
        const toileting = values.toileting;
        const toiletingNotes = values.toiletingNotes;
        const bathing = values.bathing;
        const bathingNotes = values.bathingNotes;
        const hygiene = values.hygiene;
        const hygieneNotes = values.hygieneNotes;
        const dressing = values.dressing;
        const dressingNotes = values.dressingNotes;
        const orientationDementia = values.orientationDementia;
        const orientationDementiaNotes = values.orientationDementiaNotes;
        const communicationExpressive = values.communicationExpressive;
        const communicationExpressiveNotes = values.communicationExpressiveNotes;
        const communicationReceptive = values.communicationReceptive;
        const communicationReceptiveNotes = values.communicationReceptiveNotes;
        const medicationSelfAdmin = values.medicationSelfAdmin;
        const medicationSelfAdminNotes =- values.medicationSelfAdminNotes;
        const behaviours = values.behaviours;
        const behavioursNotes = values.behavioursNotes;
        const mentalHealthSubstanceAbuse = values.mentalHealthSubstanceAbuse;
        const mentalHealthSubstanceAbuseNotes = values.mentalHealthSubstanceAbuseNotes;
        const hearing = values.hearing;
        const hearingNotes = values.hearingNotes;
        const oralAndVisionCare = values.oralAndVisionCare;
        const oralAndVisionCareNotes = values.oralAndVisionCareNotes;
        const socialSupport = values.socialSupport;
        const socialSupportNotes = values.socialSupportNotes;
        const assessmentValue = values.assessmentValue;
        const assessmentValuePercent = values.assessmentValuePercent;
        const skilledNursingServicesPressureUlcer = values.skilledNursingServicesPressureUlcer;
        const skilledNursingServicesIVHyperal = values.skilledNursingServicesIVHyperal;
        const applicantAdheresToMedicalCareYes = values.applicantAdheresToMedicalCareYes;
        const appicantAdheresToMedicalCareNo = values.applicantAdheresToMedicalCareNo;
        const assessmentSummary = values.assessmentSummary;
      
        axios({
          method: "POST",
          url: "http://localhost:4001/api/assessmentadd",
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
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      alignContent: 'flex-start'
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
    <h3>Resident Assessment</h3>
    <form onSubmit={formik.handleSubmit}>
    
    <hr/>
      <Row>
        <h5>Resident</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>First Name</label>
      <input
        id="residentFirstName"
        name="residentFirstName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentFirstName}
        />
        </Col>
      <Col>
      <label style={NameStyle}>Last Name</label>
      <input
        id="residentLastName"
        name="residentLastName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentLastName}
        />
        </Col>
        </Row>
     
     <hr/>
      <Row>
        <h5>Assessor</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>Assessor First Name</label>
      <input
        id="assessorFirstName"
        name="assessorFirstName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.assessorFirstName}
        />
        </Col>
        <Col>
      <label style={NameStyle}>Assessor Last Name</label>
      <input
        id="assessorLastName"
        name="assessorLastName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.assessorLastName}
        />
        </Col>
        </Row>
       <hr/>
       <Row>
      <label style={ItemStyle}>Resident's Marital Status</label>
      <select
       name="residentMaritalStatus"
       onChange={formik.handleChange}
       //style={{ display: 'block' }}
       display='flex'
       >
       <option value="" label="Select" />
       <option value="Single" label="Single" />
       <option value="Married" label="Married" />
       <option value="Separated" label="Separated" />
       <option value="Widow" label="Widow" />
       <option value="In a relationship" label="In a relationship"/>
       </select>
       </Row>
       <hr/>
       <Row>
      <label style={ItemStyle} >Language</label>
      <input
        id="residentLanguage"
        name="residentLanguage"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentLanguage}
        />
        </Row>
        <hr/>
       <Row>
      <label style={ItemStyle}>Living Arrangement</label>
      <select
       name="residentLivingArrangement"
       onChange={formik.handleChange}
       //style={{ display: 'block' }}
       display='flex'
       >
       <option value="" label="Select" />
       <option value="Alone" label="Alone" />
       <option value="Spouse" label="Spouse" />
       <option value="Child" label="Child" />
       <option value="Parent" label="Parent" />
       <option value="Other" label="Other"/>
       </select>
       </Row>
       <hr/>
       <Row>
      <h5>Address</h5>
      </Row>
      <Container style={ContainerStyle}>
          <Col>
      <Row style={RowStyle}>
      <label style={ItemStyle}>Street</label>
      <input
        id="residentAddressStreet"
        name="residentAddressStreet"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentAddressStreet}
        />
        </Row>
        <Row style={RowStyle}>
       <label style={ItemStyle}>City</label>
      <input
        id="residentAddressCity"
        name="residentAddressCity"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentAddressCity}
        />
        </Row>
        <Row style={RowStyle}>
       <label style={ItemStyle}>Prov</label>
      <input
        id="residentAddressProv"
        name="residentAddressProv"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentAddressProv}
        />
        </Row>
        <Row style={RowStyle}>
       <label style={ItemStyle}>Postcode</label>
      <input
        id="residentAddressPostcode"
        name="residentAddressPostcode"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentAddressPostcode}
        />
        </Row>
        </Col>
        </Container>
        <hr/>
       <Row>
      <label style={ItemStyle}>Location</label>
      <input
        id="residentCurrentLocation"
        name="residentCurrentLocation"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.residentCurrentLocation}
        />
        </Row>

        <hr/>
        <Row>
        <label style={ItemStyle}>Medically Stable?</label>
        <select
        name="residentMedicallyStable"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        >
        <option value="" label="Select" />
        <option value="Yes" label="Yes" />
        <option value="No" label="No" />
        </select>
        </Row>

        <hr/>
        <Row>
        <label style={ItemStyle}>Mental Status</label>
        <select
        name="residentMentalStatus"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        >
        <option value="" label="Select" />
        <option value="Alert" label="Alert" />
        <option value="Not Alert" label="Not Alert"/>
        </select>
        </Row>

        <hr/>
        <h5>Mental Orientation</h5>
        <Row>
        <label style={ItemStyle}>Person</label>
        <input style={ItemStyle}
        id="residentOrientedPerson"
        name="residentOrientedPerson"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        <label style={ItemStyle}>Place</label>
        <input style={ItemStyle}
        id="residentOrientedPlace"
        name="residentOrientedPlace"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        <label style={ItemStyle}>Time</label>
        <input style={ItemStyle}
        id="residentOrientedTime"
        name="residentOrientedTime"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        <label style={ItemStyle}>Occasionally Confused</label>
        <input style={ItemStyle}
        id="residentOrientedOccConfused"
        name="residentOrientedOccConfused"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Row>

        <hr/>
        <h5>Power of Attorney</h5>
        <Row>
        <label style={ItemStyle}>Yes</label>
        <input style={ItemStyle}
        id="residentPOA"
        name="residentOrientedPOA"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Row>

        <hr/>
        <Row sm>
        <label style={ItemStyle} >Medical Conditions</label>
        <textarea style={ItemStyle}
        id="medicalConditions"
        name="medicalConditions"
        type="text"
        maxLength="500"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.medicalConditions}
        />
        </Row>
        
        <hr/>
        <Row>
        <label style={ItemStyle}>Current Medications</label>
        <textarea style={ItemStyle}
        flexgrow="4"
        id="currentMedication"
        name="currentMedication"
        type="text"
        maxLength="500"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.currentMedication}
        />
        </Row>

        <hr/>
        <Row>
        <label style={ItemStyle}>Allergies</label>
        <textarea style={ItemStyle}
        id="allergies"
        name="allergies"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.allergies}
        />
        </Row>
        
        <hr/>
        <Row>
        <label style={ItemStyle}>Family Doctor</label>
        <input
        id="familyDoctor"
        name="familyDoctor"
        type="field"
        cols="7"
        rows="1"
        onChange={formik.handleChange}
        value={formik.values.familyDoctor}
        />
        <label style={ItemStyle}>Family Doctor Phone</label>
        <input
        id="familyDoctorPhone"
        name="familyDoctorPhone"
        type="field"
        cols="7"
        rows="1"
        onChange={formik.handleChange}
        value={formik.values.familyDoctorPhone}
        />
        <label style={ItemStyle}>Family Doctor Email</label>
        <input
        id="familyDoctorEmail"
        name="familyDoctorEmail"
        type="field"
        cols="7"
        rows="1"
        onChange={formik.handleChange}
        value={formik.values.familyDoctorEmail}
        />
        </Row>

        <hr/>
        <Row>
        <label style={ItemStyle}>Hobbies / Special Interests</label>
        <textarea style={ItemStyle}
        id="hobbiesAndSpecialInterests"
        name="hobbiesAndSpecialInterests"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.hobbiesAndSpecialInterests}
        />
        </Row>
        
        <hr/>
        <h4>Activities of Daily Living</h4>
        <hr/>
        <h5>1. Eating: Process of obtaining nourishment, by any means, from a receptacle into the body (Points 0-3)</h5>
        <Row>
        <select
        name="eating"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Eats independently without any physical assistance (feeds self)" />
        <option value="1" label="(1) Feeds self with reminders or verbal encouragement (supervision/coaching)" />
        <option value="2" label="(2) Constant observation is required and/or fed part of each mean (1-3 days/week)" />
        <option value="3" label="(3) Fed entire meal or requires tube feeding for greater than 50% of daily nutrition (4 or more days/week)" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Eating Notes</label>
        <textarea style={ItemStyle}
        id="eatingNotes"
        name="eatingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.eatingNotes}
        />
        </Row>

        <hr/>
        <h5>2. Transfer: Applicant's ability to move between the bed, chair, wheelchair, etc.</h5>
        <Row>
        <select
        name="transfer"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Transfers independently without staff assistance" />
        <option value="1" label="(1) Transfers with standby staff supervision" />
        <option value="2" label="(2) Transfers with physical assistance of one staff member (1-3 days/week)" />
        <option value="3" label="(3) Transfers with physical assistance of two staff members or more, or a mechanical lift" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Transfer Notes</label>
        <textarea style={ItemStyle}
        id="transferNotes"
        name="transferNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.transferNotes}
        />
        </Row>

        <hr/>
        <h5>3.1 Mobility: Applicant's ability to walk without physical assistance from others</h5>
        <Row>
        <select
        name="mobilityWalking"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Independently mobile (without staff assistance) with or without assistive devices (cane, walker, wheelchair)" />
        <option value="1" label="(1) Mobile with standby supervision" />
        <option value="2" label="(2) Physical assistance is always necessary for walking and wheeling.  Actively participates in mobility" />
        <option value="3" label="(3) Totally dependent on others for mobility.  Unable to actively participate in mobility" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Mobility (Walking) Notes</label>
        <textarea style={ItemStyle}
        id="mobilityWalkingNotes"
        name="mobilityWalkingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.mobilityWalkingNotes}
        />
        </Row>

        <hr/>
        <h5>3.2 Mobility: Applicant's ability to self-propel a wheelchair without physical assistance from others</h5>
        <Row>
        <select
        name="mobilityWheelChair"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Not Applicable" />
        <option value="0" label="(0) Always able to self-propel a wheelchair without physical assistance from others"/>
        <option value="1" label="(1) Physical assistance is required 1-3 days a week for wheeling and propelling a wheelchair" />
        <option value="2" label="(2) Physical assistance is required 4 or more days a week for wheeling and propelling a wheelchair" />
        <option value="3" label="(3) Never able to self-propel a wheelchair without physical assistance from others" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Mobility (Wheelchair) Notes</label>
        <textarea style={ItemStyle}
        id="mobilityWheelChairNotes"
        name="mobilityWheelChairNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.mobilityWheelChairNotes}
        />
        </Row>

        <hr/>
        <h5>4 Toileting: Applicant's physical ability to get into, on to, and from a bathroom, toilet, commode, or urinal</h5>
        <Row>
        <select
        name="toileting"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Toilets independently without staff physical assistance from others"/>
        <option value="1" label="(1) Requires supervision, reminders, or verbal cuing for toileting.  Does not need staff physical assistance" />
        <option value="2" label="(2) Requires direct staff physical assistance and attendance during toileting daily (incontinence, ostomy, foley, toileting)" />
        <option value="3" label="(3) Always requires complete staff physical assistance with toileting daily (incontinence, ostomy, foley, toileting)" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Toileting Notes</label>
        <textarea style={ItemStyle}
        id="toiletingNotes"
        name="toiletingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.toiletingNotes}
        />
        </Row>

        <hr/>
        <h5>5 Bathing:  Applicant's ability to bathe self without physical assistance from others</h5>
        <Row>
        <select
        name="bathing"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Independent with bathing"/>
        <option value="1" label="(1) Requires physical assistance 1-3 days per week with bathing" />
        <option value="2" label="(2) Requires physical assistance 4 days or more per week with bathing" />
        <option value="3" label="(3) Totally dependent on others for bathing" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Bathing Notes</label>
        <textarea style={ItemStyle}
        id="bathingNotes"
        name="bathingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.bathingNotes}
        />
        </Row>

        <hr/>
        <h5>6 Hygiene:  Applicant's ability to perform personal hygiene (shaving, shampooing, nail and oral care) without assistance</h5>
        <Row>
        <select
        name="hygiene"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Independent with personal hygiene"/>
        <option value="1" label="(1) Requires physical assistance 1-3 days per week with personal hygiene" />
        <option value="2" label="(2) Requires physical assistance 4 days or more per week with personal hygiene" />
        <option value="3" label="(3) Totally dependent on others with personal hygiene" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Hygiene Notes</label>
        <textarea style={ItemStyle}
        id="hygieneNotes"
        name="hygieneNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.hygieneNotes}
        />
        </Row>

        <hr/>
        <h5>7 Dressing:  Applicant's ability to dress self without physical assistance from others</h5>
        <Row>
        <select
        name="dressing"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Independent with dressing"/>
        <option value="1" label="(1) Requires physical assistance 1-3 days per week with dressing" />
        <option value="2" label="(2) Requires physical assistance 4 days or more per week with dressing" />
        <option value="3" label="(3) Totally dependent on others with dressing" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Dressing Notes</label>
        <textarea style={ItemStyle}
        id="dressingNotes"
        name="dressingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.dressingNotes}
        />
        </Row>

        <hr/>
        <h5>8 Orientation/Dementia:  Applicant's orientation to both Person (remembers name, recognizes family) and Place (knows where they are and is able to locate common areas in living environment)</h5>
        <Row>
        <select
        name="orientationDementia"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Always oriented to both Person and Place"/>
        <option value="1" label="(1) Usually oriented to both Peson and Place (disoriented 1-3 days/week)" />
        <option value="2" label="(2) Usually NOT oriented to both Person and Place (disoriented 4 or more days/week)" />
        <option value="3" label="(3) Never oriented to Person and/or Place" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Orienation/Dementia Notes</label>
        <textarea style={ItemStyle}
        id="orientationDementiaNotes"
        name="orientationDementiaNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.orientationDementiaNotes}
        />
        </Row>

        <hr/>
        <h5>9.1 Communication - Expressive:  Applicant's ability to express basic wants and needs</h5>
        <Row>
        <select
        name="communicationExpressive"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Always able to clearly express basic wants and needs"/>
        <option value="1" label="(1) Usually able to clearly express basic wants and needs (1-3 days/week)" />
        <option value="2" label="(2) Usually NOT able to clearly express basic wants and needs (4+ days/week)" />
        <option value="3" label="(3) Never able to clearly express basic wants and needs" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Communication - Expressive Notes</label>
        <textarea style={ItemStyle}
        id="communicationExpressiveNotes"
        name="communicationExpressiveNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.communicationExpressiveNotes}
        />
        </Row>

        <hr/>
        <h5>9.2 Communication - Receptive:  Applicant's ability to understand and follow simple instructions (perform basic activities of daily living such as dressing or bathing without continual caregive interventions)</h5>
        <Row>
        <select
        name="communicationReceptive"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Always able to understand and follow simple instructions"/>
        <option value="1" label="(1) Usually able to understand and follow simple instructions (1-3 days/week)" />
        <option value="2" label="(2) Usually NOT able to understand and follow simple instructions (4+ days/week)" />
        <option value="3" label="(3) Never able to understand and follow simple instructions" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Communication - Receptive Notes</label>
        <textarea style={ItemStyle}
        id="communicationReceptiveNotes"
        name="communicationReceptiveNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.communicationReceptiveNotes}
        />
        </Row>

        <hr/>
        <h5>10 Medication:  Applicant's ability to self-administer medications with limited assistance from others (eg. reminding, reading labels, opening bottles, handing to applicant, monitoring dosage, encouraging).  This includes Optics, Topicals, Inhalers and Continuous Pain Management</h5>
        <Row>
        <select
        name="medicationSelfAdmin"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Always physically and mentally capable of self-administering prescribed medications"/>
        <option value="1" label="(1) Usually physically and mentally capable of self-administering prescribed medications with limited assistance" />
        <option value="2" label="(2) Usually NOT physically and mentally capable of self-administering prescribed medications despite availability of limited assistance" />
        <option value="3" label="(3) Not physically and mentally capable of self-administering prescribed medications despite availability of limited assistance" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Medication - Notes</label>
        <textarea style={ItemStyle}
        id="medicationSelfAdminNotes"
        name="medicationSelfAdminNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.medicationSelfAdminNotes}
        />
        </Row>

        <hr/>
        <h5>11 Behaviours:  Does applicant require continual staff intervention for a persistent pattern of behavioural problems (aggressive physical behaviour, disrobing, or repetitive elopement)?</h5>
        <Row>
        <select
        name="behaviours"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Does not have persistent pattern of behaviour problems requiring caregiver intervention"/>
        <option value="1" label="(1) Requires caregiver intervention 1-3 days/week due to an established and persistent pattern of behaviour problems" />
        <option value="2" label="(2) Requires caregiver intervention 4+ days/week due to an established and persistent pattern of behaviour problems" />
        <option value="3" label="(3) Requires caregiver intervention daily due to an established and persistent pattern of behaviour problems" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Behaviours - Notes</label>
        <textarea style={ItemStyle}
        id="behavioursNotes"
        name="behavioursNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.behavioursNotes}
        />
        </Row>

        <hr/>
        <h5>12 Mental Health and/or Substance Abuse</h5>
        <Row>
        <select
        name="mentalHealthSubstanceAbuse"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) No history of mental illness or addiction"/>
        <option value="1" label="(1) Past history of mental illness or addiction" />
        <option value="2" label="(2) Currently requires treatment or medication for mental health or addiction issues" />
        <option value="3" label="(3) Fails to access needed therapy for mental health or addiction issues" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Mental Health / Substance Abuse - Notes</label>
        <textarea style={ItemStyle}
        id="mentalHealthSubstanceAbuseNotes"
        name="mentalHealthSubstanceAbuseNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.mentalHealthSubstanceAbuseNotes}
        />
        </Row>

        <hr/>
        <h5>13 Hearing</h5>
        <Row>
        <select
        name="hearing"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) No hearing problem"/>
        <option value="1" label="(1) Mild hearing loss" />
        <option value="2" label="(2) Moderate hearing loss" />
        <option value="3" label="(3) Significant hearing loss" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Hearing - Notes</label>
        <textarea style={ItemStyle}
        id="hearingNotes"
        name="hearingNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.hearingNotes}
        />
        </Row>

        <hr/>
        <h5>14 Oral and Vision Care</h5>
        <Row>
        <select
        name="oralAndVisionCare"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Receives regular dental and vision exams"/>
        <option value="1" label="(1) Requires assistance accessing dental and vision care" />
        <option value="2" label="(2) Significant difficulty related to oral and/or vision care" />
        <option value="3" label="(3) Requires complete assistance related to oral and/or dental care" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Oral and Vision Care - Notes</label>
        <textarea style={ItemStyle}
        id="oralAndVisionCareNotes"
        name="oralAndVisionCareNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.oralAndVisionCareNotes}
        />
        </Row>

        <hr/>
        <h5>15 Social Support</h5>
        <Row>
        <select
        name="socialSupport"
        onChange={formik.handleChange}
        //style={{ display: 'block' }}
        display='flex'
        width="300"
        >
        <option value="" label="Select" />
        <option value="0" label="(0) Applicant reports strong support system"/>
        <option value="1" label="(1) Social support system but estranged from at least 1 source of social support (e.g. family, friends, spiritual)" />
        <option value="2" label="(2) Minimal social support from family, friends, or spiritual contacts" />
        <option value="3" label="(3) None, or refuses social support system" />
        </select>
        </Row>
        <div></div>
        <Row>
        <label style={ItemStyle}>Social Support - Notes</label>
        <textarea style={ItemStyle}
        id="socialSupportNotes"
        name="socialSupportNotes"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.socialSupportNotes}
        />
        </Row>

        <hr/>
        <Row><h5>Assessment Value  </h5><p>(out of possible 51)</p></Row>
        <Row>
        <CalculatedField
                id="assessmentValue"
                type="field"
                name="assessmentValue"
                value={formik.values.assessmentValue}
                values={formik.values}
                setFieldValue={formik.setFieldValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                width="15"                
              />
         </Row>

         <hr/>
        <Row><h5>Assessment Value %  </h5></Row>
        <Row>
        <CalculatedField1
                id="assessmentValuePercent"
                type="number"
                maximumFractionDigits="2"
                name="assessmentValuePercent"
                value={formik.values.assessmentValuePercent}
                values={formik.values}
                setFieldValue={formik.setFieldValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                width="15"                
              />
         </Row>

        <hr/>
        <h5>Skilled Nursing Services</h5>
        <Row>
        <p style={ItemStyle}>Pressure Ulcer Care including Wound Vacuum (Pressure Ulcer must be Stage 3 or 4 in severity.  Physician's orders and wound assessment in describing characteristics and measurements)</p>
        <input
        id="skilledNursingServicesPressureUlcer"
        name="skilledNursingServicesPressureUlcer"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Row>
        <hr/>
        <Row>
        <p style={ItemStyle}>IV or Hyperal Therapy (Physician's orders-specify frequency and duration)</p>
        <input
        id="skilledNursingServicesIVHyperal"
        name="skilledNursingServicesIVHyperal"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Row>
        <hr/>
        <Row>
          <p style={ItemStyle}>
            (Check All That Apply)
            These services must be ordered by a physician and supported by documentation.  All services must be performed by professional nursing staff.  Any services checked require the italicized documentation faxed with the PAE.
          </p>
        </Row>
        <hr/>
        <Row>
        <p style={ItemStyle}>Applicant adheres to medical care?</p>
        </Row>
        <Row>
        <hr/>
        <Col>
        <label>Yes</label>
        <input
        id="applicantAdheresToMedicalCareYes"
        name="applicantAdheresToMedicalCareYes"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Col>
        <Col>
        <label>No</label>
        <input
        id="applicantAdheresToMedicalCareNo"
        name="appicantAdheresToMedicalCareNo"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Col>
        <Col></Col>
        <Col></Col>
        </Row>

        <hr/>
        <h5>Summary</h5>
        <Row>
        <label style={ItemStyle}>Assessment Summary</label>
        <textarea style={ItemStyle}
        id="assessmentSummary"
        name="assessmentSummary"
        type="text"
        rows="10"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.assessmentSummary}
        />
        </Row>
        <hr/>
        <Row>
        <label htmlFor="assessmentDate" style={ItemStyle}>Assessment Date</label>
        <input
        id="assessmentDate"
        name="assessmentDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.assessmentDate}
      />
      </Row> 

      <hr/>
      <Row>
        <Sig
        id="assessorSignature"
        name="assessorSignature"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.assessorSignature}
                
        >
        </Sig>
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

function ResAssessmentTool() {
  return <SignupForm />;
}

export default ResAssessmentTool;
