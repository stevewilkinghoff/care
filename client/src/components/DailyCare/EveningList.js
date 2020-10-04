import React from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {date:"",
                    cottage:"",
                    shift:"Evening",
                    name: "",
                    washHands:false,
                    brushTeethSoakDentures:false,
                    removeGlasses:false,
                    changeAttends:false,
                    emptyCatheterBag:false,
                    removeCompStockings:false,
                    removeHearAidLockInMedDrawer:false,
                    washFacePeriCarePJs:false,
                    ateDinner:"",
                    glassesOfWater:"",
                    recActivity:false
                  },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const date = values.date;
      const cottage = values.cottage;
      const shift = values.shift;
      const name = values.name;
      const washHands = values.washHands;
      const brushTeethSoakDentures = values.brushTeethSoakDentures;
      const removeGlasses = values.removeGlasses;
      const changeAttends = values.changeAttends;
      const emptyCatheterBag = values.emptyCatheterBag;
      const removeCompStockings = values.removeCompStockings;
      const removeHearAidLockInMedDrawer = values.removeHearAidLockInMedDrawer;
      const washFacePeriCarePJs = values.washFacePeriCarePJs;
      const ateDinner = values.ateDinner;
      const glassesOfWater = values.glassesOfWater
      const recActivity = values.recActivity
      //axios.post("http://localhost:4001/api/notes", { values })
      axios({
          method: "POST",
          url: "http://localhost:4001/api/eveninglist",
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
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      alignSelf: 'flex-end',
      flexWrap: 'wrap'
   }

   const RowStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      alignContent: 'flex-start'
   }

   const ItemStyle = {
     alignSelf: 'flex-start',
     justifyContent: 'flex-start'
   }


  return (
    <>
    <h3>Daily Care Checklist - Evening Shift</h3>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="date" style={RowStyle}>Date</label>
    <Container style={ContainerStyle}>
      <Row style={RowStyle}>
      <Col sm>
      <input style={RowStyle}
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      </Col>
      <Col sm>
      <label>Cottage</label>
      <select style={ItemStyle}
       name="cottage"
       onChange={formik.handleChange}
       //style={{ display: 'block' }}
       display='flex'
       >
       <option value="" label="Select" />
       <option value="cottage1" label="Cottage 1" />
       <option value="cottage2" label="Cottage 2" />
       <option value="cottage3" label="Cottage 3" />
       <option value="cottage4" label="Cottage 4" />
       </select>
       </Col>
       <Col>
       <input hidden='true'
          id="shift"
          name="shift"
          type="field"
          onChange={formik.handleChange}
          value="Evening"
       />
       </Col>

      <Col>
       <label>Resident</label>
       <select
        name="name"
        onChange={formik.handleChange}
        style={{ display: 'block' }}
        >
        <option value="" label="Select" />
        <option value="tom" label="Tom" />
        <option value="dick" label="Dick" />
        <option value="harry" label="Harry" />
        <option value="lucille" label="Lucille" />
        </select>
        </Col>
        </Row>
        </Container>

      <Container style={ContainerStyle}>
        <hr/>
        <Row style={RowStyle}>
      <Col style={RowStyle}>
        <hr/>
      <label>Wash hands before / after each meal</label>
      <input style={ItemStyle}
        id="washHands"
        name="washHands"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.checked}
        />
        </Col>
        
       <Col style={RowStyle}>
       <label>Brush teeth / Soak Dentures</label>
         <input style={ItemStyle}
            id="brushTeethSoakDentures"
            name="brushTeethSoakDentures"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.checked}
        />
        </Col>
        <Col style={RowStyle}>
        <label>Remove Glasses</label>
            <input style={ItemStyle}
               id="removeGlasse"
               name="removeGlasse"
               type="checkbox"
               onChange={formik.handleChange}
               value={formik.values.checked}
        />
        </Col>
        <Col style={RowStyle}>
        <label>Change Attends</label>
           <input style={ItemStyle}
              id="changeAttends"
              name="changeAttends"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
        />
        </Col>
           <Col style={RowStyle}>
           <label>Empty catheter bag</label>
           <input style={ItemStyle}
              id="emptyCatheterBag"
              name="emptyCatheterBag"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           </Row>
           </Container>

           <Container style={ContainerStyle}>
             <hr/>
             <Row/>
             <Row style={RowStyle}>
           <Col style={RowStyle}>
           <label>Remove compression stockings</label>
           <input style={ItemStyle}
              id="removeCompStockings"
              name="removeCompStockings"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           <Col style={RowStyle}>
           <label>Remove hearing aid / lock in med drawer</label>
           <input style={ItemStyle}
              id="removeHearAidLockInMedDrawer"
              name="removeHearAidLockInMedDrawer"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           <Col style={RowStyle}>
           <label>Wash face / pericare / put on PJ's</label>
           <input style={ItemStyle}
              id="washFacePeriCarePJs"
              name="washFacePeriCarePJs"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           <Col style={RowStyle}>
           <label>Rec Activity (Sing, Puzzles, Card, Exercise)</label>
           <input style={ItemStyle}
              id="recActivity"
              name="recActivity"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           </Row>
           </Container>

           <Container style={ContainerStyle}>
             <hr/>
             <Row/>
             <Row style={RowStyle}>
           <Col style={RowStyle}>
           <label>Ate dinner</label>
            <select style={ItemStyle}
            name="ateDinner"
            onChange={formik.handleChange}
            style={{ display: 'block' }}
            >
            <option value="" label="Select" />
            <option value="none" label="None" />
            <option value="quarter" label="Quarter" />
            <option value="half" label="Half" />
            <option value="full" label="Full" />
            </select>
            </Col>
            <Col style={RowStyle}>
            <label htmlFor="glassesOfWater">No. Glasses of Water Drank</label>
            <input style={ItemStyle}
             id="glassesOfWater"
             name="glassesOfWater"
             type="number"
             onChange={formik.handleChange}
             value={formik.values.email}
           />
           </Col>
           </Row>
           </Container>
           


        <div/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

function EveningCareList() {
  return <SignupForm />;
}

export default EveningCareList;
