import React from 'react';
import axios from 'axios';

export default class EmployeeAdd extends React.Component {
  state = {
    staffEmploymentDate:'',
    staffLocation:'',
    staffFirstName:'',
    staffLastName:'',
    staffPhoto:'',
    staffPhone:'',
    staffEmail:'',
    staffStreetAddress:'',
    staffCityAddress:'',
    staffPostcodeAddress:''
    }

  handleChange = event => {
    this.setState({ 
    staffEmploymentDate: event.target.value,
    staffLocation: event.target.value,
    staffFirstName:event.target.value,
    staffLastName: event.target.value,
    staffPhoto: event.target.value,
    staffPhone: event.target.value,
    staffEmail: event.target.value,
    staffStreetAddress: event.target.value,
    staffCityAddress: event.target.value,
    staffPostcodeAddress: event.target.value,
    });
}

  handleSubmit = event => {
    event.preventDefault();
    const employee = {
    staffEmployementDate: this.state.staffEmploymentDate,
    staffLocation: this.state.staffLocation,
    staffFirstName: this.state.staffFirstName,
    staffLastName: this.state.staffLastName,
    staffPhoto: this.state.staffPhoto,
    staffPhone: this.state.staffPhoto,
    staffEmail: this.state.staffEmail,
    staffStreetAddress: this.state.staffCityAddress,
    staffCityAddress: this.state.staffCityAddress,
    staffPostcodeAddress: this.state.staffPostcodeAddress,
    };

    axios.post(`http://localhost:4001/api/employeeadd`, { employee })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}