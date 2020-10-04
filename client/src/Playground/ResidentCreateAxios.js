import React from 'react';
import axios from 'axios';

export default class ResidentAdd extends React.Component {
  state = {
    residentFirstName: '',
    residentlastName: '',
    residentMoveInDate: '',
    residentDOB: '',
    residentCottage: '',
    residentRoomNo: '',
    residentAhcNo: '',
    NOK1FirstName: '',
    NOK1LastName: '',
    NOK1PhoneNo: '',
    NOK1Email: '',
    doctorName: '',
    doctorClinic: '',
    doctorEmail: '',
    doctorPhone: '',
    doctorCell: '',
    doctorAddress: '',
    doctorCity: '',
    doctorPostcode: '',
    nurseFirstName: '',
    nurseLastName: '',
    nursePhone: '',
    nurseCell: '',
    nurseEmail: ''
    
  }

  handleChange = event => {
    this.setState({ residentFirstName: event.target.value,
    residentLastName: event.target.value,
    residentMoveInDate: event.target.value,
    residentDOB: event.target.value,
    residentCottage: event.target.value,
    residentRoomNo: event.target.value,
    residentAhcNo: event.target.value,
    NOK1FirstName: event.target.value,
    NOK1LastName: event.target.value,
    NOK1PhoneNo: event.target.value,
    NOK1Email: event.target.value,
    doctorName: event.target.value,
    doctorClinic: event.target.value,
    doctorEmail: event.target.value,
    doctorPhone: event.target.value,
    doctorCell: event.target.value,
    doctorAddress: event.target.value,
    doctorCity: event.target.value,
    doctorPostcode: event.target.value,
    nurseFirstName: event.target.value,
    nurseLastName: event.target.value,
    nursePhone: event.target.value,
    nurseCell: event.target.value,
    nurseEmail: event.target.value

    });
    
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      residentFirstName: this.state.residentFirstName,
      residentLastName: this.state.residentlastName,
      residentMoveInDate: this.state.residentMoveInDate,
      residentDOB: this.state.residentDOB,
      residentCottage: this.state.residentCottage,
      residentRoomNo: this.state.residentRoomNo,
      residentAhcNo: this.state.residentAhcNo,
      NOK1FirstName: this.state.NOK1FirstName,
      NOK1LastName: this.state.NOK1LastName,
      NOK1PhoneNo: this.state.NOK1PhoneNo,
      NOK1Email: this.state.NOK1Email,
      doctorName: this.state.doctorName,
      doctorClinic: this.state.doctorClinic,
      doctorEmail: this.state.doctorEmail,
      doctorPhone: this.state.doctorPhone,
      doctorCell: this.state.doctorCell,
      doctorAddress: this.state.doctorAddress,
      doctorCity: this.state.doctorCity,
      doctorPostcode: this.state.doctorPostcode,
      nurseFirstName: this.state.nurseFirstName,
      nurseLastName: this.state.nurseLastName,
      nursePhone: this.state.nursePhone,
      nurseCell: this.state.nurseCell,
      nurseEmail: this.state.nurseEmail
      

    };

    axios.post(`http://localhost:4001/api/residentadd`, { user })
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
