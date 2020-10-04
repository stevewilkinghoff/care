import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './OldApp';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Resident from './components/Forms/Residents/ResidentForm';
import ResidentDOB from './components/Forms/Residents/ResidentDOB';
import App4 from './fileselect';
import ListResidents from './components/ShowStuff/ListResidents';
import Users from './components/ResidentSetUp/Users';
import AppFuck from './components/ResidentSetUp/UserRender';
import Shitty from './Users/Shitty';
import Appy from './Users/ResidentsPage';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
    <App/>
    </div>,
    </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
