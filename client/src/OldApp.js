import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import Resident from './components/Forms/Residents/ResidentForm';
import NextOfKin from './components/Forms/NextOfKin/NextOfKin';
import DoctorDetails from './components/Forms/Doctor/DoctorDetails';
import NurseDetails from './components/Forms/Nurse/NurseDetails';


class OldApp extends Component {
  render() {
    return (
      <div className="container" margin="10px">
        <Header/>
        <div className="container" margin="10px">
          <Resident/>
        </div>
        <hr/>
        <div className="container" margin="10px">
        <NextOfKin/>
        </div>
        <hr/>
        <div className="container" margin="10px">
        <DoctorDetails className="container"/>
        </div>
        <hr/>
        <div className="container" margin="10px">
        <NurseDetails className="container"/>
        </div>

      </div>
    );
  }
}

export default OldApp;