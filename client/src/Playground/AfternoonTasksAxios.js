import React from 'react';
import axios from 'axios';

export default class AfternoonTasks extends React.Component {
  state = {
    taskListDate: '',
    taskListShift:'',
    taskListStaffName: '',
    taskListCareForResidents:{
      name: 'Care for residents',
      value: true},
    taskListAdministerMedicine:{
      name: 'Administer medicine',
      value:true},
    taskListScheduledShowersWaterTempTest:{
      name: "Scheduled showers and water temp test",
      value: true},
    taskListScheduledRoomCleaning:{
      name: "Scheduled room cleaning",
      value: true},
    taskListGrooming: {
      name: "Grooming",
      value: true},
    taskListResidentLaundry:{
      name: "Resident laundry (clean lint trap)",
      value: true},
    taskListActivities:{
      name: "Activities",
      value: true},
    taskListDailyNotes:{
      name: "Daily notes",
      value: true},
    taskListPrepDinner:{
      name: "Prepare dinner",
      value: true},
    taskListSanitizeCountersTable:{
      name: "Sanitize counters and table",
      value: true},
    taskListSweepVacMop:{
      name: "Sweep, vacuum and mop floors",
      value: true},
    taskListCleanSanitizeBathTubToiletCountersMirror:{
      name: "Clean and sanitize bathrooms, tub, toilet, counters, mirror",
      value: true},
    taskListStockPaperTowerToiletPaperSoaps:{
      name: "Stock paper towel, toilet paper, refill paper",
      value: true},
    taskListCheckDoorsSecured:{
      name: "Check doors (secured)",
      value: true},
    taskListDoLaundry:{
      name: "Do laundry (clean lint trap)",
      value: true},
    taskListUnloadDishwasher:{
      name: "Unload dishwasher (if needed)",
      value: true},
    taskListEnterMaintNeeded:{
      name: "Enter maintenance needed",
      value: true},
    taskListCommunicationNoted:{
      name: "Communication noted",
      value: true},
    taskListCommunicationBookTexted:{
      name: "Communication book texted",
      value: true},
    taskListCleanOrganizeFridge:{
      name: "Clean and organize fridge",
      value: true},
    taskListWashThrowsBlankets:{
      name: "Wash throws and blankets",
      value: true},    
    taskListSignOff: ''
   }

  handleChange = event => {
    this.setState({ 
    taskListDate: event.target.value,
    taskListShift: event.target.value,
    taskListStaffName: event.target.value,
    taskListCareForResidents:{
      name:event.target.value,
      value:event.target.value
      },
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
        taskListCareForResidents:{
          name:this.state.taskListCareForResidents.name,
          value:this.state.taskListCareForResidents.value
        },
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