import React from 'react';

class MoveInDate extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container">
                <p>Move-In Date:</p>
                <input type="date" margin="10 px"/>
            </div>
          </form>
        );
      }
  }

  export default MoveInDate;