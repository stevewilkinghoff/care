import React, { Component } from 'react';

import DoctorEmail from './DoctorEmail';
import DoctorName from './DoctorName';
import DoctorClinic from './DoctorClinic';
import DoctorPhone from './DoctorPhone';
import DoctorCell from './DoctorCell';
import DoctorAddress from './DoctorAddress';




class DoctorDetails extends Component {
  render() {
    return (
      <container>
      <div className="container">
        <div className="row">
            <div className="column">
                <DoctorName/>
            </div>
            <div className="column">
                <DoctorClinic/>
            </div>
            <div className="column">
                <DoctorEmail/>
            </div>
            <div className="column">
                <DoctorPhone/>
            </div>
            <div className="column">
                <DoctorCell/>
            </div>
          </div>
        <div className="row">
            <div className="column">
                <DoctorAddress/>
            </div>
        </div>
        </div>
        </container>
    );
  }
}

export default DoctorDetails;