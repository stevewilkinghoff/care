import React, { Component } from 'react';

import NurseName from './NurseName';

class NurseDetails extends Component {
  render() {
    return (
      <container>
      <div className="container">
        <h5>Nurse Information</h5>
        <div className="row">
            <div className="column">
                <NurseName/>
            </div>
            <div className="column">
                <NurseName/>
            </div>
            <div className="column">
                <NurseName/>    
            </div>
            <div className="column">
                <NurseName/>
            </div>
        </div>
        </div>
        </container>
    );
  }
}

export default NurseDetails;