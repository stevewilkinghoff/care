import React from 'react';

import "react-datepicker/dist/react-datepicker.css";

class SwallowAssessment extends React.Component {
    render() {
        return (
          <div>
          <form classname="container" formtext-padding="10 px">
              <p>Swallowing Assessment</p>
            <div className="container">
                <p>Date Assessed:</p>
                <input type="date" margin="10 px"/>
            </div>
          </form>

          <form classname="container" formtext-padding="10 px">
            <div className="container">
                <p>Review Date:</p>
                <input type="date" margin="10 px"/>
            </div>
          </form>
          </div>
        );
      }
  }

  export default SwallowAssessment;