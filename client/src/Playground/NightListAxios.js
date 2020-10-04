import React from 'react';
import axios from 'axios';

export default class NightList extends React.Component {
  state = {
    name: '',
    shift:'',
    date:'',
    cottage:'',
    repoEvery2to3Hrs:'',
    changeAttends:'',
    emptyCatheterBag:'',
    roundsEvery1to2Hours:'',
    washWheelchair:'',
    disinfectLiftsAndWashSlingsSundays:'',
    restockGlovesWipesClothsAttendsGarbagebags:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value,
    shift: event.target.value,
    date: event.target.value,
    cottage: event.target.value,
    repoEvery2to3Hrs: event.target.value,
    brushTeethSoakDentures: event.target.value,
    changeAttends: event.target.value,
    emptyCatheterBag: event.target.value,
    roundsEvery1to2Hours: event.target.value,
    washWheelchair: event.target.value,
    disinfectLiftsAndWashSlingsSundays: event.target.value,
    restockGlovesWipesClothsAttendsGarbagebags: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      shift: this.state.shift,
      date: this.state.date,
      cottage: this.state.cottage,
      repoEvery2to3Hrs: this.state.repoEvery2to3Hrs,
      changeAttends: this.state.changeAttends,
      emptyCatheterBag: this.state.emptyCatheterBag,
      roundsEvery1to2Hours: this.state.roundsEvery1to2Hours,
      washWheelchair: this.state.washWheelchair,
      disinfectLiftsAndWashSlingsSundays: this.state.disinfectLiftsAndWashSlingsSundays,
      restockGlovesWipesClothsAttendsGarbagebags: this.state.restockGlovesWipesClothsAttendsGarbagebags

    };

    axios.post(`http://localhost:4001/api/nightlist`, { user })
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
