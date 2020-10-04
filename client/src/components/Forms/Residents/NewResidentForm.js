import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Header from '../../Header';
import ResidentName from './ResidentName';
import NextOfKin from '../NextOfKin/NextOfKin';
import ResidentPhoto from './ResidentPhoto';
import DoctorDetails from '../Doctor/DoctorDetails';
import NurseDetails from '../Nurse/NurseDetails';
import MoveInDate from './MoveInDate';
import DateOfBirth from './ResidentDOB';
import ResidentCottage from './Cottage';
import ResidentRoom from './ResidentRoom';
import ResidentAHC from './ResidentAHC';

class NewResident extends Component {
  render() {
    return (
      <div>
         <h3>New Resident Input</h3>
        <Form>
            <Form.Group>
            <Form.Row>
               <Form.Group as={Col}><Form.Label><h5>Resident Information</h5></Form.Label>
                    <ResidentName/>
                </Form.Group>
                <Form.Group as={Col}><Form.Label></Form.Label>
                    <MoveInDate/>
                </Form.Group>
                <Form.Group as={Col}><Form.Label></Form.Label>
                    <ResidentPhoto/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <DateOfBirth/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ResidentCottage/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ResidentRoom/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ResidentAHC/>
                </Form.Group>
            </Form.Row>
            </Form.Group>
            <hr/>
            <Form.Row>
               <Form.Group as={Col}><Form.Label><h5>Next of Kin</h5></Form.Label>
                    <NextOfKin/>
                </Form.Group>
            </Form.Row>
            <hr/>

            <Form.Row>
               <Form.Group as={Col}><Form.Label><h5>Doctor Details</h5></Form.Label>
                    <DoctorDetails/>
                </Form.Group>
            </Form.Row>
            <hr/>
            <Form.Row>
                <Form.Group as={Col}><Form.Label><h5>Nurse Contact</h5></Form.Label>
                    <NurseDetails/>
                </Form.Group>
            </Form.Row>



            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
      </div>
    );
  }
}

export default NewResident;
