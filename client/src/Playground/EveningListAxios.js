import React from 'react';
import axios from 'axios';

export default class EveningList extends React.Component {
  state = {
    name: '',
    shift:'',
    date:'',
    cottage:'',
    washHands:'',
    brushTeethSoakDentures:'',
    removeGlasses:'',
    changeAttends:'',
    emptyCatheterBag:'',
    removeCompStockings:'',
    removeHearAidLockInMedDrawer:'',
    washFacePeriCarePJs:'',
    ateDinner:'',
    glassesOfWater:'',
    recActivity:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value,
    shift: event.target.value,
    date: event.target.value,
    cottage: event.target.value,
    washHands: event.target.value,
    brushTeethSoakDentures: event.target.value,
    removeGlasses: event.target.value,
    changeAttends: event.target.value,
    emptyCatheterBag: event.target.value,
    removeCompStockings: event.target.value,
    removeHearAidLockInMedDrawer: event.target.value,
    washFacePeriCarePJs: event.target.value,
    ateDinner: event.target.value,
    glassesOfWater: event.target.value,
    recActivity: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      shift: this.state.shift,
      date: this.state.date,
      cottage: this.state.cottage,
      washHands: this.state.washHands,
      brushTeethSoakDentures: this.state.brushTeethSoakDentures,
      removeGlasses: this.state.removeGlasses,
      changeAttends: this.state.changeAttends,
      emptyCatheterBag: this.state.emptyCatheterBag,
      removeCompStockings: this.state.removeCompStockings,
      removeHearAidLockInMedDrawer: this.state.removeHearAidLockInMedDrawer,
      washFacePeriCarePJs: this.state.washFacePeriCarePJs,
      putOnCleanClothes: this.state.putOnCleanClothes,
      ateDinner: this.state.ateDinner,
      glassesOfWater: this.state.glassesOfWater,
      recActivity: this.state.recActivity

    };

    axios.post(`http://localhost:4001/api/eveninglist`, { user })
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
