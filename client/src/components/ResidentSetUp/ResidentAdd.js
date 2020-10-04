import React from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const SignupForm = () => {
  const formik = useFormik({
    initialValues: {residentFirstName:"",
                    residentLastName:"",
                    residentMoveInDate:"",
                    residentDOB: "",
                    residentCottage:"",
                    residentRoomNo: "",
                    residentAhcNo: "",
                    NOK1FirstName:"",
                    NOK1LastName: "",
                    NOK1PhoneNo: "",
                    NOK1Email: "",
                    doctorName: "",
                    doctorClinic: "",
                    doctorEmail: "",
                    doctorPhone:"",
                    doctorCell: "",
                    doctorAddress: "",
                    doctorCity: "",
                    doctorPostcode: "",
                    nurseFirstName: "",
                    nurseLastName: "",
                    nursePhone: "",
                    nurseCell: "",
                    nurseEmail: "",
                    powerOfAttorney:"",
                    photo:""
                    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const residentFirstName = values.residentFirstName;
      const residentLastName = values.residentLastName;
      const residentMoveInDate = values.residentMoveInDate;
      const residentDOB = values.residentDOB;
      const residentCottage = values.residentCottage;
      const residentRoomNo = values.residentRoomNo;
      const residentAhcNo = values.residentAhcNo;
      const NOK1FirstName = values.NOK1FirstName;
      const NOK1LastName = values.NOK1LastName;
      const NOK1PhoneNo = values.NOK1PhoneNo;
      const NOK1Email = values.NOK1Email;
      const doctorName = values.doctorName;
      const doctorClinic = values.doctorClinic;
      const doctorEmail = values.doctorEmail;
      const doctorPhone = values.doctorPhone;
      const doctorCell = values.doctorCell;
      const doctorAddress = values.doctorAddress;
      const doctorCity = values.doctorCity;
      const doctorPostcode = values.doctorPostcode;
      const nurseFirstName = values.nurseFirstName;
      const nurseLastName = values.nurseLastName;
      const nursePhone = values.nursePhone;
      const nurseCell = values.nurseCell;
      const nurseEmail = values.nurseEmail;
      const powerOfAttorney = values.powerOfAttorney;
      const photo = values.photo;
      
      axios({
          method: "POST",
          url: "http://localhost:4001/api/residentadd",
          data: values
        })

        console.log(photo)

      //.then(res => {
      //  console.log(res); // this returns the callback from the post
      //  console.log(values);  // this returns all the values from form
      }
    })

    // now test sending name and email to a route created that will return the data to screen
    // this is a test to be able to see if we can post to database
    const ContainerStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'flex-end'
   }

   const RowStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignSelf: 'flex-end',
      alignContent: 'flex-end'
   }

  return (
    <>
    <h3>Add a New Resident</h3>
    <form onSubmit={formik.handleSubmit}>
    
    <h4>Personal Details</h4>
    <Container style={ContainerStyle}>
    <Row>
    <Col sm>
    <label>First Name</label>
       <input
          id="residentFirstName"
          name="residentFirstName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentFirstName}
       />
       </Col>
    <Col sm>
    <label>Last Name</label>
       <input
          id="residentLastName"
          name="residentLastName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentLastName}
       />
       </Col>
       <Col sm>              
    <label htmlFor="date">Move-In Date</label>
      <input
        id="residentMoveInDate"
        name="residentMoveInDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      </Col>

    <Col sm>
    <label htmlFor="date">Date of Birth</label>
      <input
        id="residentDOB"
        name="residentDOB"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      </Col>
      <Col sm>
    <label>Alberta Health No.</label>
       <input
          id="residentAhcNo"
          name="residentAhcNo"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentAhcNo}
          />
        </Col>
       </Row> 
      </Container>
     
     <Container style={ContainerStyle}>
    <Row>
    <Col sm>
    <label>Cottage</label>
      <select
       name="residentCottage"
       onChange={formik.handleChange}
       style={{ display: 'block' }}
       >
       <option value="" label="Select" />
       <option value="cottage1" label="Cottage 1" />
       <option value="cottage2" label="Cottage 2" />
       <option value="cottage3" label="Cottage 3" />
       <option value="cottage4" label="Cottage 4" />
       </select>
       </Col>
    <Col sm style={RowStyle}>
      <label>Room Number</label>
       <input style={RowStyle}
          id="residentRoomNo"
          name="residentRoomNo"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentRoomNo}
       />
       </Col>
       </Row>
       </Container>
       
       <hr/>
       
              
       <h4>Next of Kin Information</h4>
       <Container style={ContainerStyle}>
       <Row>
       <Col sm> 
       <label>First Name</label>
       <input
          id="NOK1FirstName"
          name="NOK1FirstName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.NOKFirstName}
       />
       </Col>

       <Col sm> 
       <label>Last Name</label>
       <input
          id="NOK1LastName"
          name="NOK1LastName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.NOKLastName}
       />
       </Col>

       <Col sm>
       <label>Phone Number</label>
       <input
          id="NOK1PhoneNo"
          name="NOK1PhoneNo"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.NOKPhoneNo}
       />
       </Col>

        <Col sm>
       <label>Email</label>
       <input style={RowStyle}
          id="NOK1Email"
          name="NOK1Email"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.NOKEmail}
       />   
       </Col>
       </Row>
       </Container>    

       <hr/>
       <h4>Doctor Information</h4>
       <Container>
       <Row>
       <Col sm> 
       <label>Doctor Name</label>
       <input
          id="doctorName"
          name="doctorName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorName}
       />
       </Col>
       <Col sm> 
       <label>Clinic</label>
       <input
          id="doctorClinic"
          name="doctorClinic"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorClinic}
       />
       </Col>
       <Col sm> 
       <label>Email</label>
       <input
          id="doctorEmail"
          name="doctorEmail"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorEmail}
       />
       </Col>
       <Col sm> 
       <label>Phone</label>
       <input
          id="doctorPhone"
          name="doctorPhone"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorPhone}
       />
       </Col>
       <Col sm> 
       <label>Cell</label>
       <input
          id="doctorCell"
          name="doctorCell"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorCell}
       />
       </Col>
       </Row>
       <Row>
       <Col sm> 
       <label>Address</label>
       <input
          id="doctorAddress"
          name="doctorAddress"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorAddress}
       />
       </Col>
       <Col sm> 
       <label>City/Town</label>
       <input
          id="doctorCity"
          name="doctorCity"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorCity}
       />
       </Col>
       <Col sm> 
       <label>Postcode</label>
       <input
          id="doctorPostdcode"
          name="doctorPostcode"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.doctorPostcode}
       />
       </Col>
       <Col sm></Col>
       <Col sm></Col>
       </Row>
       </Container>
      
       <hr/>
       <h4>Nurse Information</h4>
       <Container>
       <Row>
       <Col sm> 
       <label>First Name</label>
       <input
          id="nurseFirstName"
          name="nurseFirstName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.nurseFirstName}
       />
       </Col>
       <Col sm> 
       <label>Last Name</label>
       <input
          id="nurseLastName"
          name="nurseLastName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.nurseLastName}
       />
       </Col>
       <Col sm> 
       <label>Phone</label>
       <input
          id="nursePhone"
          name="nursePhone"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.nursePhone}
       />
       </Col>
       <Col sm> 
       <label>Cell</label>
       <input
          id="nurseCell"
          name="nurseCell"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.nurseCell}
       />
       </Col>
       <Col sm> 
       <label>Email</label>
       <input
          id="nurseEmail"
          name="nurseEmail"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.nurseEmail}
       />
       </Col>
       </Row>
       <hr/>
       <h4>Uploads</h4>
       <Container>
       <Row>
       <Col sm> 
       <label>POA</label>
       <input
          id="powerOfAttorney"
          name="powerOfAttorney"
          type="file"
          onChange={formik.handleChange}
          value={formik.values.powerOfAttorney}
       />
       </Col>

       <Col sm> 
       <label>Photo</label>
       <input
          id="photo"
          name="photo"
          type="file"
          onChange={formik.handleChange}
          value={formik.values.photo}
         
       />
       </Col>
       </Row>
       </Container>
       <Row></Row>
       </Container>

       
      <div/>
      <hr/>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

function ResidentAdd() {
  return <SignupForm />;
}

export default ResidentAdd;