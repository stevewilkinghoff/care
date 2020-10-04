import React from 'react';
import axios from 'axios';

export default class MorningList extends React.Component {
  state = {
    name: '',
    shift:'',
    date:'',
    cottage:'',
    washHands:'',
    washFace:'',
    brushTeeth:'',
    changeAttends:'',
    emptyCatheterBag:'',
    applyCompStockings:'',
    putOnHearingAid:'',
    putOnDeodorantLotion:'',
    putOnCleanClothes:'',
    brushHairGlassesMakeup:'',
    makeBed:'',
    ateBreakfast:'',
    ateLunch:'',
    glassesOfWater:'',
    recActivity:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value,
    shift: event.target.value,
    date: event.target.value,
    cottage: event.target.value,
    washFace: event.target.value,
    washHands: event.target.value,
    brushTeeth: event.target.value,
    changeAttends: event.target.value,
    emptyCatheterBag: event.target.value,
    applyCompStockings: event.target.value,
    putOnHearingAid: event.target.value,
    putOnDeodorantLotion: event.target.value,
    putOnCleanClothes: event.target.value,
    brushHairGlassesMakeup: event.target.value,
    makeBed: event.target.value,
    ateBreakfast: event.target.value,
    ateLunch: event.target.value,
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
      washFace: this.state.washFace,
      brushTeeth: this.state.brushTeeth,
      changeAttends: this.state.changeAttends,
      emptyCatheterBag: this.state.emptyCatheterBag,
      applyCompStockings: this.state.applyCompStockings,
      putOnHearingAid: this.state.putOnHearingAid,
      putOnDeodorantLotion: this.state.putOnDeodorantLotion,
      putOnCleanClothes: this.state.putOnCleanClothes,
      brushHairGlassesMakeup: this.state.brushHairGlassesMakeup,
      makeBed: this.state.makeBed,
      ateBreakfast: this.state.ateBreakfast,
      ateLunch: this.state.ateLunch,
      glassesOfWater: this.state.glassesOfWater,
      recActivity: this.state.recActivity

    };

    axios.post(`http://localhost:4001/api/morninglist`, { user })
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
