import React from 'react';
import axios from 'axios';

export default class DailyTasks extends React.Component {
  state = {
    taskListDate: '',
    taskListShift:'',
    taskListStaffName: '',
    taskListCareForResidents: '',
    taskListAdministerMedicine: '',
    taskListSanitizeCountersTable: '',
    taskListSweepVacMop: '',
    taskListActivityMenuBoards,
    taskListCleanSanitizeBathTubToiletCountersMirror: '',
    taskListStockPaperTowelToiletPaperSoaps: '',
    taskListSanitizeDoorKnobsSwitchesCounterTopsEtc: '',
    taskListDoLaundry: '',
    taskListUnloadDishwasher: '',
    taskListCleanKitchen: '',
    taskListEnterMaintNeeded: '',
    taskListCommunicationNoted: '',
    taskListNoteSuppliesNeeded: '',
    taskListDustPicFrames: '',
    taskListCleanOrganizeClosetsAndUnderSinks: '',
    taskListCheckDoorsSecured: '',
    taskListCleanOven: '',
    taskListDustPicFramesPlasticPlants: '',
    taskListSpotCleanWalls: '',
    taskListSignOff: ''
   }

  handleChange = event => {
    this.setState({ 
        taskListDate: event.target.value,
        taskListShift: event.target.value,
        taskListStaffName: event.target.value,
        taskListCareForResidents: event.target.value,
        taskListAdministerMedicine: event.target.value,
        taskListSanitizeCountersTable: event.target.value,
        taskListSweepVacMop: event.target.value,
        taskListActivityMenuBoards: event.target.value,
        taskListCleanSanitizeBathTubToiletCountersMirror: event.target.value,
        taskListStockPaperTowelToiletPaperSoaps: event.target.value,
        taskListSanitizeDoorKnobsSwitchesCounterTopsEtc: event.target.value,
        taskListDoLaundry: event.target.value,
        taskListUnloadDishwasher: event.target.value,
        taskListCleanKitchen: event.target.value,
        taskListEnterMaintNeeded: event.target.value,
        taskListCommunicationNoted: event.target.value,
        taskListNoteSuppliesNeeded: event.target.value,
        taskListDustPicFrames: event.target.value,
        taskListCleanOrganizeClosetsAndUnderSinks: event.target.value,
        taskListCheckDoorsSecured: event.target.value,
        taskListCleanOven: event.target.value,
        taskListDustPicFramesPlasticPlants: event.target.value,
        taskListSpotCleanWalls: event.target.value,
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
        taskListSweepVacMop: this.state.taskListSweepVacMop,
        taskListSanitizeCountersTable: this.state.taskListSanitizeCountersTable,
        taskListActivityMenuBoards: this.state.taskListActivityMenuBoards,
        taskListCleanSanitizeBathTubToiletCountersMirror: this.state.taskListCleanSanitizeBathTubToiletCountersMirror,
        taskListStockPaperTowelToiletPaperSoaps: this.state.taskListStockPaperTowelToiletPaperSoaps,
        taskListSanitizeDoorKnobsSwitchesCounterTopsEtc: this.state.taskListSanitizeDoorKnobsSwitchesCounterTopsEtc,
        taskListDoLaundry: this.state.taskListDoLaundry,
        taskListUnloadDishwasher: this.state.taskListUnloadDishwasher,
        taskListCleanKitchen: this.state.taskListCleanKitchen,
        taskListEnterMaintNeeded: this.state.taskListEnterMaintNeeded,
        taskListCommunicationNoted: this.state.taskListCommunicationNoted,
        taskListNoteSuppliesNeeded: this.state.taskListNoteSuppliesNeeded,
        taskListDustPicFrames: this.state.taskListDustPicFrames,
        taskListCleanOrganizeClosetsAndUnderSinks: this.state.taskListCleanOrganizeClosetsAndUnderSinks,
        taskListCheckDoorsSecured: this.state.taskListCheckDoorsSecured,
        taskListCleanOven: this.state.taskListCleanOven,
        taskListDustPicFramesPlasticPlants: this.state.taskListDustPicFramesPlasticPlants,
        taskListSpotCleanWalls: this.state.taskListSpotCleanWalls,
        taskListSignOff: this.state.taskListSignOff
        };

    axios.post(`http://localhost:4001/api/eveningtasksadd`, { dailytasks })
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