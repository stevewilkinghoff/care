import React from 'react';

class Religion extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container">
                <p>Religion:</p>
                <input type="text" margin="10px" style={{width: "450px", height: "100px"}}/>
            </div>
          </form>
        );
      }
  }

  export default Religion;