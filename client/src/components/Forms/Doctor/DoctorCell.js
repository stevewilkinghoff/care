import React from 'react';


class DoctorCell extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" margin="10px">
                <p>Cell:</p>
                <input type="tel" margin="10 px"/>
            </div>
        </form>
        );
      }
  }

  export default DoctorCell;