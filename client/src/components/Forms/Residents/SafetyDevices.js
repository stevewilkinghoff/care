import React from 'react';

class SafetyDevices extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container">
                <p>Safety Devices Used:</p>
                <input type="text" margin="10px" style={{width: "450px", height: "100px"}}/>
            </div>
          </form>
        );
      }
  }

  export default SafetyDevices;