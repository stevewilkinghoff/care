import React from 'react';


class ResidentName extends React.Component {
  render() {
    return (
      <form classname="container" formtext-padding="10 px">
        <div className="container">
        <div className="row">
          <div className="column">
            <div className="container">
            <p>First Name:</p>
            <input type="text"/>
            </div>
          </div>
          <div className="column">
            <p>Last Name:</p>
            <input type="text"/>
          </div>
        </div>
        </div>
      </form>
    );
  }
}

export default ResidentName;