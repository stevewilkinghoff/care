import React from 'react';
import axios from 'axios';

export default class DailyTasks extends React.Component {
  state = {
    taskListDate: '',
    taskListShift:'',
    taskListStaffName: '',
    taskListCareForResidents: '',
    taskListAdministerMedicine: '',
    taskListScheduledShowersWaterTempTest: '',
    taskListScheduledRoomCleaning: '',
    taskListGrooming: '',
    taskListResidentLaundry: '',
    taskListActivities: '',
    taskListDailyNotes: '',
    taskListPrepBreakfast: '',
    taskListPrepLunch: '',
    taskListPrepSnack: '',
    taskListSanitizeCountersTable: '',
    taskListSaltStepsAndShovel: '',
    taskListEnterMaintNeeded: '',
    taskListCommunicationNoted: '',
    taskListCheckPerimeterForHazards: '',
    taskListCheckPerimeterForMaintNeeded: '',
    taskListCheckDoorsSecured: '',
    taskListSignOff: ''
   }

  handleChange = event => {
    this.setState({ 
        taskListDate: event.target.value,
        taskListShift: event.target.value,
        taskListStaffName: event.target.value,
        taskListCareForResidents: event.target.value,
        taskListAdministerMedicine: event.target.value,
        taskListScheduledShowersWaterTempTest: event.target.value,
        taskListScheduledRoomCleaning: event.target.value,
        taskListGrooming: event.target.value,
        taskListResidentLaundry: event.target.value,
        taskListActivities: event.target.value,
        taskListDailyNotes: event.target.value,
        taskListPrepBreakfast: event.target.value,
        taskListPrepLunch: event.target.value,
        taskListPrepSnack: event.target.value,
        taskListSanitizeCountersTable: event.target.value,
        taskListSaltStepsAndShovel: event.target.value,
        taskListEnterMaintNeeded: event.target.value,
        taskListCommunicationNoted: event.target.value,
        taskListCheckPerimeterForHazards: event.target.value,
        taskListCheckPerimeterForMaintNeeded: event.target.value,
        taskListCheckDoorsSecured: event.target.value,
        taskListSignOff: event.target.value
    });
}

  handleSubmit = event => {
    event.preventDefault();
    const dailytasks = {
        taskListDate: this.state.taskListDate,
        taskListShift: this.state.taskListShift,
        taskListStaffName: this.state.taskListStaffName,
        taskListCareForResidents: this.state.taskListCareForResidents,
        taskListAdministerMedicine: this.state.taskListAdministerMedicine,
        taskListScheduledShowersWaterTempTest: this.state.taskListScheduledShowersWaterTempTest,
        taskListScheduledRoomCleaning: this.state.taskListScheduledRoomCleaning,
        taskListGrooming: this.state.taskListGrooming,
        taskListResidentLaundry: this.state.taskListResidentLaundry,
        taskListActivities: this.state.taskListActivities,
        taskListDailyNotes: this.state.taskListDailyNotes,
        taskListPrepBreakfast: this.state.taskListPrepBreakfast,
        taskListPrepLunch:  this.state.taskListPrepLunch,
        taskListPrepSnack: this.state.taskListPrepSnack,
        taskListSanitizeCountersTable: this.state.taskListSanitizeCountersTable,
        taskListSaltStepsAndShovel: this.state.taskListSaltStepsAndShovel,
        taskListEnterMaintNeeded: this.state.taskListEnterMaintNeeded,
        taskListCommunicationNoted: this.state.taskListCommunicationNoted,
        taskListCheckPerimeterForHazards: this.state.taskListCheckPerimeterForHazards,
        taskListCheckPerimeterForMaintNeeded: this.state.taskListCheckPerimeterForMaintNeeded,
        taskListCheckDoorsSecured: this.state.taskListCheckDoorsSecured,
        taskListSignOff: this.state.taskListSignOff
        };

    axios.post(`http://localhost:4001/api/dailytasksadd`, { dailytasks })
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