import React from 'react';
import axios from 'axios';
import { useFormik, Form, Formik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
    taskListDate: '',
    taskListShift: 'Evening',
    taskListStaffName: '',
    taskListCareForResidents: true,
    taskListAdministerMedicine: true,
    taskListSanitizeCountersTable: true,
    taskListSweepVacMop: true,
    taskListActivityMenuBoards: true,
    taskListCleanSanitizeBathTubToiletCountersMirror:  true,
    taskListStockPaperTowelToiletPaperSoaps: true,
    taskListSanitizeDoorKnobsSwitchesCounterTopsEtc:  true,
    taskListDoLaundry: true,
    taskListUnloadDishwasher: true,
    taskListCleanKitchen:  true,
    taskListEnterMaintNeeded: true,
    taskListCommunicationNoted: true,
    taskListNoteSuppliesNeeded:  true,
    taskListDustPicFrames:  true,
    taskListCleanOrganizeClosetsAndUnderSinks:  true,
    taskListCheckDoorsSecured: true,
    taskListCleanOven:  true,
    taskListDustPicFramesPlasticPlants:  true,
    taskListSpotCleanWalls: true,
    taskListSignOff: true
    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
      const taskListDate = values.taskListDate;
      const taskListShift = values.taskListShift;
      const taskListStaffName = values.taskListStaffName;
      const taskListCareForResidents = values.taskListCareForResidents;
      const taskListAdministerMedicine = values.taskListAdministerMedicine;
      const taskListSanitizeCountersTable = values.taskListSanitizeCountersTable;
      const taskListSweepVacMop = values.taskListSweepVacMop;
      const taskListActivityMenuBoards = values.taskListActivityMenuBoards;
      const taskListCleanSanitizeBathTubToiletCountersMirror = values.taskListCleanSanitizeBathTubToiletCountersMirror;
      const taskListStockPaperTowelToiletPaperSoaps = values.taskListStockPaperTowelToiletPaperSoaps;
      const taskListSanitizeDoorKnobsSwitchesCounterTopsEtc = values.taskListSanitizeDoorKnobsSwitchesCounterTopsEtc;
      const taskListDoLaundry = values.taskListDoLaundry;
      const taskListUnloadDishwasher = values.taskListUnloadDishwasher;
      const taskListCleanKitchen = values.taskListCleanKitchen;
      const taskListEnterMaintNeeded = values.taskListEnterMaintNeeded;
      const taskListCommunicationNoted = values.taskListCommunicationNoted;
      const taskListNoteSuppliesNeeded = values.taskListNoteSuppliesNeeded;
      const taskListDustPicFrames = values.taskListDustPicFrames;
      const taskListCleanOrganizeClosetsAndUnderSinks = values.taskListCleanOrganizeClosetsAndUnderSinks;
      const taskListCheckDoorsSecured = values.taskListCheckDoorsSecured;
      const taskListCleanOven = values.taskListCleanOven;
      const taskListDustPicFramesPlasticPlants = values.taskListDustPicFramesPlasticPlants;
      const taskListSpotCleanWalls = values.taskListSpotCleanWalls;
      const taskListSignOff = values.taskListSignOff;
                 
        axios({
          method: "POST",
          url: "http://localhost:4001/api/dailytasksadd",
          data: values
        })
      //.then(res => {
      //  console.log(res); // this returns the callback from the post
      //  console.log(values);  // this returns all the values from form
      }
    })

    // now test sending name and email to a route created that will return the data to screen
    // this is a test to be able to see if we can post to database

    const ContainerStyle = {
      display: 'flex',
      alignContent: 'space-around',
      justifyContent: 'space-between',
      alignSelf: 'flex-start'
   }

   const RowStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
   }

   const ItemStyle = {
    display: 'flex', 
    paddingRight:30,
    spacing: 5,
    align:'right',
    alignContent: 'space-around',
    justifyContent:'flex-end'
   }

   const NameStyle = {
    display: 'flex', 
    paddingRight:30,
    spacing: 5
   }

  return (
    <>
    <h5>Daily Tasks - Night Shift (11pm - 7am)</h5>
    <form onSubmit={formik.handleSubmit}>
    <hr/>
    <Row>
      <label style={NameStyle}>Date</label>
      <input
        id="taskListDate"
        name="taskListDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
        </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCareForResidents"
        name="taskListCareForResidents"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Care for residents</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListAdministerMedicine"
        name="taskListAdministerMedicine"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Administer medicine</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListScheduledShowersWaterTempTest"
        name="taskListScheduledShowersWaterTempTest"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Scheduled showers with water temp test</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListScheduledRoomCleaning"
        name="taskListScheduledRoomCleaning"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Scheduled room cleaning</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListGrooming"
        name="taskListGrooming"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Grooming</p>
    </Row>
   
    <hr/>
    <Row>
    <input checked
        id="taskListResidentLaundry"
        name="taskListResidentLaundry"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Resident laundry (clean lint trap)</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListActivities"
        name="taskListActivities"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Activities</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListDailyNotes"
        name="taskListDailyNotes"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Daily notes</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListPrepDinner"
        name="taskListPrepDinner"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Prepare dinner</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListSanitizeCountersTable"
        name="taskListSanitizeCountersTable"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Sanitize counters and table</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListSweepVacMop"
        name="taskListSweepVacMop"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Sweep, vacuum, and mop floors</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCleanSanitizeBathTubToiletCountersMirror"
        name="taskListCleanSanitizeBathTubToiletCountersMirror"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Clean and sanitize bathrooms, tub, toilet, counters, mirror</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListStockPaperTowelToiletPaperSoaps"
        name="taskListStockPaperTowelToiletPaperSoaps"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Stock paper towel, toilet paper, refill soaps</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCheckDoorsSecured"
        name="taskListCheckDoorsSecured"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Check doors (secured)</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListDoLaundry"
        name="taskListDoLaundry"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Do laundry (clean lint trap)</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListUnloadDishwasher"
        name="taskListUnloadDishwasher"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Unload dishwasher (if needed)</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListEnterMaintNeeded"
        name="taskListEnterMaintNeeded"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Enter maintenance needed</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCommunicationNoted"
        name="taskListCommunicationNoted"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Communication noted</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCommunicationBookTexted"
        name="taskListCommunicationBookTexted"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Communication book texted</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListCleanOrganizeFridge"
        name="taskListCleanOrganizeFridge"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Clean and organize fridge</p>
    </Row>

    <hr/>
    <Row>
    <input checked
        id="taskListWashThrowsBlankets"
        name="taskListWashThrowsBlankets"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>Wash throws and blankets</p>
    </Row>

    

    <hr/>
    
    <div/>
    <Row>
    <label>Certification</label> 
    </Row>
    <Row> 
    <input
        id="taskListSignOff"
        name="taskListSignOff"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      <p style={RowStyle}>I have completed these daily tasks above</p>
    </Row>

    <hr/>
    <Row>
    <label style={RowStyle}>Staff Name</label>
    <input
        id="taskListStaffName"
        name="taskListStaffName"
        type="field"
        onChange={formik.handleChange}
        value={formik.values.checked}
        style={RowStyle}
        />
      </Row>
      
   
        <Col/>
        <Col/>
        


        

     
      
        
       
        <div>
          <hr/>
          <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

function MorningTasks() {
  return <SignupForm />;
}

export default MorningTasks;
