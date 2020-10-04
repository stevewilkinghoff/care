import React from 'react';


class DoctorEmail extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" margin="10px">
                <p>Email:</p>
                <input type="email" margin="10 px"/>
            </div>
        </form>
        );
      }
  }

  export default DoctorEmail;