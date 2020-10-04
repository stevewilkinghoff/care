import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Header from '../../../Header';
import ResidentName from '../ResidentName';
import NextOfKin from '../../NextOfKin/NextOfKin';
import ResidentPhoto from '../ResidentPhoto';
import DoctorDetails from '../../Doctor/DoctorDetails';
import NurseDetails from '../../Nurse/NurseDetails';
import MoveInDate from '../MoveInDate';
import DateOfBirth from '../ResidentDOB';
import ResidentCottage from '../Cottage';
import ResidentRoom from '../ResidentRoom';
import ResidentAHC from '../ResidentAHC';
import ResidentAllergies from '../Allergies';
import Resuscitation from '../Resuscitation';
import FallRisk from '../FallRisk';
import MentalStatus from '../MentalStatus';
import Diet from '../Diet';
import Nourishment from '../Nourishment';
import Diagnosis from '../Diagnosis';
import CommDeficit from '../CommDeficit';
import AssistiveDevices from '../AssistiveDevices';
import Toileting from '../Toileting';
import Continence from '../Continence';
import ContinenceProds from '../ContinenceProds';
import IncontSuppBy from '../IncontSuppBy';
import Mobility from '../Mobility';
import SafetyDevices from '../SafetyDevices';
import LaundryDoneBy from '../Laundry';
import AssistiveAids from '../AssistiveAids';
import PeriCare from '../PeriCare';
import Teeth from '../Teeth';
import SleepRest from '../SleepRest';
import Positioning from '../Positioning';
import Activities from '../Activities';
import Religion from '../Religion';
import SwallowAssessment from '../SwallowAssessment';
import CarePlanSignOff from '../CarePlanSignOff';

class CarePlan1 extends Component {
  render() {
    return (
      <div> 
         <Header/> 
         <h4>Resident Care Plan</h4>
        <Form>
            <Form.Group><h6>Resident</h6>
            <Form.Row>
               <Form.Group>
                    <ResidentName/>
                </Form.Group>
                <Form.Group>
                    <DateOfBirth/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ResidentAHC/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ResidentRoom/>
                </Form.Group>
              </Form.Row>
            </Form.Group>
            
            <hr/>
            
            
            <Form.Row>
               <Form.Group as={Col}>
                    <ResidentAllergies/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Resuscitation/>
                </Form.Group>
                <Form.Group as={Col}>
                    <FallRisk/>
                </Form.Group>
            </Form.Row>
            <hr/>

            <Form.Row>
               <Form.Group as={Col}><Form.Label><p>Physician</p></Form.Label>
                    <DoctorDetails/>
                </Form.Group>
            </Form.Row>
            
            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <MentalStatus/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Diet/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Nourishment/>
                </Form.Group>
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <Diagnosis/>
                </Form.Group>
                <Form.Group as={Col}>
                    <CommDeficit/>
                </Form.Group>
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <AssistiveDevices/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Toileting/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Continence/>
                </Form.Group>
                <Form.Group as={Col}>
                    <ContinenceProds/>
                </Form.Group>
                <Form.Group as={Col}>
                    <IncontSuppBy/>
                </Form.Group>
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <Mobility/>
                </Form.Group>
                <Form.Group as={Col}>
                    <SafetyDevices/>
                </Form.Group>
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <LaundryDoneBy/>
                </Form.Group>
                <Form.Group as={Col}>
                    <AssistiveAids/>
                </Form.Group>
                <Form.Group as={Col}>
                    <PeriCare/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Teeth/>
                </Form.Group>
                
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <SleepRest/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Positioning/>
                </Form.Group>
                
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <Activities/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Religion/>
                </Form.Group>
                
            </Form.Row>

            <hr/>
            
            <Form.Row>
                <Form.Group as={Col}>
                    <SwallowAssessment/>
                </Form.Group>
                <Form.Group as={Col}>
                    <CarePlanSignOff/>
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

export default CarePlan1;