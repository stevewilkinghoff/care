import React from 'react';

import "react-datepicker/dist/react-datepicker.css";

class DateOfBirth extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container">
                <p>DOB:</p>
                <input type="date" margin="10 px"/>
            </div>
          </form>
        );
      }
  }

  export default DateOfBirth;