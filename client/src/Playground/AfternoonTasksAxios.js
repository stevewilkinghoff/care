import React from 'react';
import axios from 'axios';

export default class AfternoonTasks extends React.Component {
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
    taskListPrepDinner: '',
    taskListSanitizeCountersTable: '',
    taskListSweepVacMop: '',
    taskListCleanSanitizeBathTubToiletCountersMirror: '',
    taskListStockPaperTowerToiletPaperSoaps: '',
    taskListCheckDoorsSecured: '',
    taskListDoLaundry: '',
    taskListUnloadDishwasher: '',
    taskListEnterMaintNeeded: '',
    taskListCommunicationNoted: '',
    taskListCommunicationBookTexted: '',
    taskListCleanOrganizeFridge: '',
    taskListWashThrowsBlankets: '',    
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
    taskListPrepDinner: event.target.value,
    taskListSanitizeCountersTable: event.target.value,
    taskListSweepVacMop: event.target.value,
    taskListCleanSanitizeBathTubToiletCountersMirror: event.target.value,
    taskListStockPaperTowerToiletPaperSoaps: event.target.value,
    taskListCheckDoorsSecured: event.target.value,
    taskListDoLaundry: event.target.value,
    taskListUnloadDishwasher: event.target.value,
    taskListEnterMaintNeeded: event.target.value,
    taskListCommunicationNoted: event.target.value,
    taskListCommunicationBookTexted: event.target.value,
    taskListCleanOrganizeFridge: event.target.value,
    taskListWashThrowsBlankets: event.target.value,    
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
        taskListPrepDinner: this.state.taskListPrepDinner,
        taskListSanitizeCountersTable: this.state.taskListSanitizeCountersTable,
        taskListSweepVacMop: this.state.taskListSweepVacMop,
        taskListCleanSanitizeBathTubToiletCountersMirror: this.state.taskListCleanSanitizeBathTubToiletCountersMirror,
        taskListStockPaperTowerToiletPaperSoaps: this.state.taskListStockPaperTowerToiletPaperSoaps,
        taskListCheckDoorsSecured: this.state.taskListCheckDoorsSecured,
        taskListDoLaundry: this.state.taskListDoLaundry,
        taskListUnloadDishwasher: this.state.taskListUnloadDishwasher,
        taskListEnterMaintNeeded: this.state.taskListEnterMaintNeeded,
        taskListCommunicationNoted: this.state.taskListCommunicationNoted,
        taskListCommunicationBookTexted: this.state.taskListCommunicationBookTexted,
        taskListCleanOrganizeFridge: this.state.taskListCleanOrganizeFridge,
        taskListWashThrowsBlankets: this.state.taskListWashThrowsBlankets,    
        taskListSignOff: this.state.taskListSignOff
        };

    axios.post(`http://localhost:4001/api/afternoontasksadd`, { dailytasks })
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