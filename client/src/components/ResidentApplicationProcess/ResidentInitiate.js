import React from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CalculatedField from './TotalMonthlyAmount';




const SignupForm = () => {
  const formik = useFormik({
    initialValues: {residentFirstName:"",
                    residentLastName:"",
                    residentCottage:"",
                    residentStatus:"",
                    representativeFirstName:"",
                    representativeLastName: "",
                    phone: "",
                    email: "",
                    details: "",
                    monthlyRentAmount: "",
                    monthlyCareAmount: "",
                    monthlyTotalAmount: "",
                    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const residentFirstName = values.residentFirstName;
      const residentLastName = values.residentLastName;
      const residentCottage = values.residentCottage;
      const residentStatus = values.residentStatus;
      const representativeFirstName = values.representativeFirstName;
      const representativeLastName = values.representativeLastName;
      const phone = values.phone;
      const email = values.email;
      const details = values.details;
      const monthlyRentAmount = values.monthlyRentAmount;
      const monthlyCareAmount = values.monthlyCareAmount;
      const monthlyTotalAmount = values.monthlyTotalAmount;
            
      axios({
          method: "POST",
          url: "http://localhost:4001/api/residentadd",
          data: values
        })
      }
    })

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

   const ItemStyle = {
    display: 'flex', 
    paddingRight:30,
    spacing: 5,
    align:'right',
    alignContent: 'space-around',
    justifyContent:'flex-end'
   }

  return (
    <>
    <h4>New Resident Onboarding</h4>
    <form onSubmit={formik.handleSubmit}>
    <hr/>

    <h5>Resident</h5>
    <Container style={ContainerStyle}>
    <Row>
    <hr/>
    <Col sm>
    <label style={RowStyle}>First Name</label>
       <input
          id="residentFirstName"
          name="residentFirstName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentFirstName}
       />
       </Col>
    <Col sm>
    <label style={RowStyle}>Last Name</label>
       <input
          id="residentLastName"
          name="residentLastName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.residentLastName}
       />
       </Col>
       </Row>
       </Container>
       <Container>
       <Row> 
       <Col>
       <h5>Status</h5>
       <select
       name="residentStatus"
       onChange={formik.handleChange}
       style={{ display: 'block' }}
       >
       <option value="" label="Select" />
       <option value="Lead" label="Lead" />
       <option value="Waitlist" label="Waitlist" />
       <option value="Current" label="Current" />
       <option value="Old" label="Old" />
       <option value="Archive" label="Archived" />
       </select>
       </Col>
       </Row> 
      </Container>
     <Container >
    <hr/>
    <Row>
    <h5>Cottage</h5>
    </Row>
    <Row/>
    <Row>
    <Col>
    <select
       name="residentCottage"
       onChange={formik.handleChange}
       style={{ display: 'block' }}
       >
       <option value="" label="Select" />
       <option value="Willow" label="Willow" />
       <option value="Spruce" label="Spruce" />
       <option value="Maple" label="Maple" />
       <option value="Harmony" label="Harmony" />
       </select>
       </Col>
      </Row>
       </Container>
       
       <hr/>
       
              
       <h5>Representative</h5>
       <Container style={ContainerStyle}>
       <Row>
       <Col sm> 
       <label style={RowStyle}>First Name</label>
       <input
          id="represntativeFirstName"
          name="representativeFirstName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.representativeFirstName}
       />
       </Col>

       <Col sm> 
       <label style={RowStyle}>Last Name</label>
       <input
          id="representativeLastName"
          name="representativeLastName"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.representativeLastName}
       />
       </Col>
       </Row>
       </Container>
        <hr/>
       <h5>Contact</h5>
       <Container style={ContainerStyle}>
        <Row>
       <Col>
       <label style={RowStyle}>Phone</label>
       <input
          id="phone"
          name="phone"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.phone}
       />
       </Col>

        <Col>
       <label style={RowStyle}>Email</label>
       <input
          id="email"
          name="email"
          type="field"
          onChange={formik.handleChange}
          value={formik.values.email}
       />   
       </Col>
       </Row>
       </Container>    

       <hr/>
       <h5>Details</h5>
       <Container>
       <Row>
       <Col sm> 
       <label style={ItemStyle}></label>
        <textarea style={ItemStyle}
        id="details"
        name="details"
        type="text"
        rows="5"
        cols="75"
        wrap="soft"
        onChange={formik.handleChange}
        value={formik.values.details}
        />
       </Col>
       </Row>
       </Container>
      
       <hr/>
       <h5>Monthly Rent Amount</h5>
       <Container>
       <Row>
       <Col sm> 
       <select
       name="monthlyRentAmount"
       onChange={formik.handleChange}
       style={{ display: 'block' }}
       >
       <option value="" label="Select" />
       <option value="2000" label="$2,000" />
       <option value="2500" label="$2,500" />
       <option value="3000" label="$3,500" />
       <option value="3500" label="$3,500" />
       </select>
       </Col>
       </Row>
       </Container>

       <hr/>
       <h5>Monthly Care Amount</h5>
       <Container>
       <Row>
       <Col sm> 
       <select
       name="monthlyCareAmount"
       onChange={formik.handleChange}
       style={{ display: 'block' }}
       >
       <option value="" label="Select" />
       <option value="2000" label="$2,000" />
       <option value="2500" label="$2,500" />
       <option value="3000" label="$3,500" />
       <option value="3500" label="$3,500" />
       </select>
       </Col>
       </Row>
       </Container>

       <hr/>
       <h5>Total Monthly Amount</h5>
       <Container>
       <Row>
       <Col sm> 
       <CalculatedField
                id="monthlyTotalAmount"
                type="field"
                name="monthlyTotalAmount"
                value={formik.values.monthlyTotalAmount}
                values={formik.values}
                setFieldValue={formik.setFieldValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                width="15"                
              />
       </Col>
       </Row>
       </Container>
       
       
       
       <Row></Row>
       

       
      <div/>
      <hr/>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

function ResidentInitiate() {
  return <SignupForm />;
}

export default ResidentInitiate;