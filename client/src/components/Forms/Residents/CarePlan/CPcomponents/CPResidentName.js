import React, { Component } from 'react';

import ResidentName from './CPResidentName';
import DateOfBirth from '../../ResidentDOB';
import ResidentCottage from '../../Cottage';
import ResidentRoom from '../../ResidentRoom';
import ResidentAHC from '../../ResidentAHC';

class CPResidentName extends Component {
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
        </div>
    </div>
      
    );
  }
}

export default CPResidentName;