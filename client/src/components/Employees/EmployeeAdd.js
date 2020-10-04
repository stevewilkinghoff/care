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
                    staffEmploymenDate: "",
                    staffLocation: "",
                    staffFirstName: "",
                    staffLastName: "",
                    staffPhone: "",
                    staffPhoto: "",
                    staffEmail: "",
                    staffStreetAddress: "",
                    staffCityAddress: "",
                    staffPostcodeAddress: ""
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
              
        axios({
          method: "POST",
          url: "http://localhost:4001/api/employeeadd",
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
    <h3>Create New Employee</h3>
    <form onSubmit={formik.handleSubmit}>
    
    <hr/>
      <Row>
        <h5>Name</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>First Name</label>
      <input
        id="staffFirstName"
        name="staffFirstName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffFirstName}
        />
        </Col>
      <Col>
      <label style={NameStyle}>Last Name</label>
      <input
        id="staffLastName"
        name="staffLastName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffLastName}
        />
        </Col>
        </Row>
     
     <hr/>
      <Row>
        <h5>Details</h5>
      </Row>
      <Row>
      <Col>
      <label style={NameStyle}>Employment Date</label>
      <input
        id="staffEmploymentDate"
        name="staffEmployeeDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.staffEmploymentDate}
        />
        </Col>
        <Col>
        <label style={NameStyle}>Location</label>
        <select
        name="staffLocation"
        onChange={formik.handleChange}
       //style={{ display: 'block' }}
       display='flex'
       >
       <option value="" label="Select" />
       <option value="Harmony Cottage | Red Deer" label="Harmony Cottage | Red Deer" />
       <option value="Juniper Cottage | Calgary" label="Juniper Cottage | Calgary" />
       <option value="Maple Cottage | Red Deer" label="Maple Cottage | Red Deer" />
       <option value="Spruce Cottage | Lacombe" label="Spruce Cottage | Lacombe" />
       <option value="Willow Cottage | Edmonton" label="Willow Cottage | Edmonton"/>
       <option value="Management" label="Management" />
       <option value="Other" label="Other"/>
       </select>
       </Col>
       </Row>
        <hr/>
       <Row>
       <h5>Contact</h5> 
       </Row>
       <Row>   
        <Col>
      <label style={NameStyle}>Phone No.</label>
      <input
        id="staffPhone"
        name="staffPhone"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffPhone}
        />
        </Col>
        <Col>
        <label style={NameStyle}>Email</label>
        <input
        id="staffEmail"
        name="staffEmail"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffEmail}
        />
        </Col>
        <Col>
        <label style={NameStyle}>Photo</label>
        <input
        id="staffPhoto"
        name="staffPhoto"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.staffPhoto}
        />
        </Col>
        </Row>
        <Row>
        <h5>Address</h5>
        </Row>
        <Row>
        <Col>
        <label style={NameStyle}>Street Address</label>
        <input
        id="staffStreetAddress"
        name="staffStreetAddress"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffStreetAddress}
        />
        </Col>
        <Col>
        <label style={NameStyle}>City</label>
        <input
        id="staffCityAddress"
        name="staffCityAddress"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffCityAddress}
        />
        </Col>
        <Col>
        <label style={NameStyle}>Postcode</label>
        <input
        id="staffPostcodeAddress"
        name="staffPostcodeAddress"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.staffPostcodeAddress}
        />
        </Col>    
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

function EmployeeAdd() {
  return <SignupForm />;
}

export default EmployeeAdd;
