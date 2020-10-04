import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;

const onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.props.name.value);
  };

class App1 extends Component {
    render (props) {
        return(
            <div>
                <h1> Sign Up Sheet</h1>
    
                <form onSubmit = {this.onFormSubmit}>
                    <input placeholder="Name" useref="name"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default App1;