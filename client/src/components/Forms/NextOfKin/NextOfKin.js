import React, { Component } from 'react';

import NOKName from './NOKName';
import NOKPhone from './NOKPhone';
import NOKEmail from './NOKEmail';


class NextOfKin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="column">
                <NOKName/>
            </div>
            <div className="column">
                <NOKPhone/>
            </div>
            <div className="column">
                <NOKEmail/>
            </div>
          </div>
    </div>
      
    );
  }
}

export default NextOfKin;