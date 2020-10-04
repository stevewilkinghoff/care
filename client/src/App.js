import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CarePlan from '../src/components/Forms/Residents/CarePlan/CarePlan';
import NewResident from '../src/components/Forms/Residents/NewResidentForm';
import MorningCareList from '../src/components/DailyCare/MorningList';
import EveningCareList from '../src/components/DailyCare/EveningList';
import NightCareList from '../src/components/DailyCare/NightList';
import MorningList from './Playground/axios';
import Header from './components/Header';
import ResidentAdd from '../src/components/ResidentSetUp/ResidentAdd';
import FileUp from '../src/components//Uploads/testupload';
import ShitFuckDamn from '../src/components/Uploads/ShitFuckDamn';
import ListResidents from '../src/components/ResidentSetUp/ListResidents';
import Users from '../src/Users//UsersPage';
import UserRender from './components/ResidentSetUp/UserRender';
import Appy from '../src/Users/ResidentsPage';
import FuckingShit from '../src/Users/Shitty';
import Appy1 from '../src/Users/ResidentsPage1';
import ResAssessmentTool from '../src/components/ResidentAssessment/ResidentAssessmentTool';
import EmployeeAdd from '../src/components/Employees/EmployeeAdd';
import EmployeeOrientation from '../src/components/EmployeeOrientation/EmployeeOrientation';


//import FileUpload from '../src/components/Uploads/fuckaround';


const Landing = () => <h2>Care Cottages and Karen Rock!!!!</h2>;
const ResCarePlan = CarePlan;
//const FileUpload = FileUp;

class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component= {Landing} />
            <Route exact path="/newresident" component={NewResident}/>
            <Route exact path="/careplan" component={ResCarePlan}/>
            <Route exact path="/morningchecklist" component={MorningCareList}/>
            <Route exact path="/eveningchecklist" component={EveningCareList}/>
            <Route exact path="/nightchecklist" component={NightCareList}/>
            <Route exact path="/api/morninglist" component={MorningList}/>
            <Route exact path="/addresident" component={ResidentAdd}/>
            <Route exact path="/shit" component={ShitFuckDamn}/>
            <Route exact path="/api/listresidents" component={ListResidents}/>
            <Route exact path="/residentlisting" component={UserRender}/>
            <Route exact path="/residentpage" component={Users}/>
            <Route exact path="/residents" component={Appy1}/>
            <Route exact path="/residentassessment" component={ResAssessmentTool}/>
            <Route exact path="/employeeadd" component={EmployeeAdd}/>
            <Route exact path="/employeeorientation" component={EmployeeOrientation}/>
            
            
            
        
        </div>
       </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
