import React, { Component } from 'react';
const {MongoClient, ObjectID} = require ('mongodb');


const residentList = []

  class AppShit extends React.Component {

    state = {
        residentList: []
    };
  
    renderItems() {
      return this.state.residentList.map(item => (
        <div key={item._id}>
          <p>Desc: {item.name}</p>
        </div>
      ));
    }
  
    render() {
      return <div>{this.renderItems()}</div>;
    }
  }
  
  //ReactDOM.render(<AppShit />, document.getElementById("root"));


 
export default AppShit;