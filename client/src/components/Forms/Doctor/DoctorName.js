import React from 'react';


class DoctorName extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" margin="10px">
                <p>Name:</p>
                <input type="text" margin="10 px"/>
            </div>
        </form>
        );
      }
  }

  export default DoctorName;