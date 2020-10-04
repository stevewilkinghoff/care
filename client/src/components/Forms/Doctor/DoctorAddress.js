import React from 'react';


class DoctorAddress extends React.Component {
  render() {
    return (
      <form classname="container" formtext-padding="10 px">
        <div className="container">
        <div className="row">
          <div className="column">
            <div className="container">
            <p>Address:</p>
            <input type="text" margin="10 px"/>
            </div>
          </div>
          <div className="column">
            <p>City/Town:</p>
            <input type="text" margin="10px"/>
          </div>
          <div className="column">
            <div className="container">
            <p>Postcode:</p>
            <input type="text" margin="10px"/>
            </div>
          </div>
        </div>
        </div>
      </form>
    );
  }
}

export default DoctorAddress;