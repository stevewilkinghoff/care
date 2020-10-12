import React from 'react';
import axios from 'axios';
import { useFormik, Form, Formik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RentalAgreement from './RentalAgreement';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
                    rentalTerms: "",
                    
                    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
        const rentalTerms = values.rentalTerms;
                      
        //axios({
        //  method: "POST",
        //  url: "http://localhost:4001/api/employeeadd",
        //  data: values
        //})
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

   const AgreementStyle={
       border:5,
       borderColor:"black",
       width:300
   }

  return (
    <>
    <h3>Rental Agreement</h3>
    <form onSubmit={formik.handleSubmit}>
    
    <hr/>
    <Row>
    <Col style={AgreementStyle}>
    <RentalAgreement/>
    </Col>
    
    </Row>
      <Row>
        <h5>Name</h5>
      </Row>
      <Row>
      <Col>
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

function TestForm() {
  return <SignupForm />;
}

export default TestForm;
