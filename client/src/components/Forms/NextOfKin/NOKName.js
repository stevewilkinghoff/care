import React from 'react';

class NOKName extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container">
            <div className="row">
              <div className="column">
                <div className="container">
                <p>NOK - First Name:</p>
                <input type="text" margin="10 px"/>
                </div>
              </div>
              <div className="column">
                <p>NOK - Last Name:</p>
                <input type="text" margin="10px"/>
              </div>
            </div>
            </div>
          </form>
        );
      }
  }

  export default NOKName;