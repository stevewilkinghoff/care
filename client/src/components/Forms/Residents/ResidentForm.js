import React, { Component } from 'react';

import ResidentName from './ResidentName';
import DateOfBirth from './ResidentDOB';
import MoveInDate from './MoveInDate';
import ResidentCottage from './Cottage';
import ResidentPhoto from './ResidentPhoto';
import ResidentRoom from './ResidentRoom';
import ResidentAHC from './ResidentAHC';

class Resident extends Component {
  render() {
    return (
      <div className="container">
        <h5>New Resident Information</h5>
        <div className="row">
            <div className="column">
                <ResidentName />
            </div>
            <div className="column">
                <DateOfBirth/>
            </div>
            <div className="column">
                <MoveInDate/>
            </div>
          </div>
          <div className="row">  
            <div className="column">
                <ResidentCottage/>
            </div>
            <div className="column">
                <ResidentRoom/>
            </div>
            <div className="column">
                <ResidentAHC/>
            </div>
            <div className="column">
                <ResidentPhoto/>
            </div>
        </div>
    </div>
      
    );
  }
}

export default Resident;