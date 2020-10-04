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
                    shift:"Night",
                    name: "",
                    repoEvery2to3Hrs:false,
                    changeAttends:false,
                    emptyCatheterBag:false,
                    roundsEvery1to2Hours:false,
                    washWheelchair:false,
                    disinfectLiftsAndWashSlingsSundays:false,
                    restockGlovesWipesClothsAttendsGarbagebags:false,
                    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const date = values.date;
      const cottage = values.cottage;
      const shift = values.shift;
      const name = values.name;
      const repoEvery2to3Hrs = values.repoEvery2to3Hrs;
      const changeAttends = values.changeAttends;
      const emptyCatheterBag = values.emptyCatheterBag;
      const roundsEvery1to2Hours = values.roundsEvery1to2Hours;
      const washWheelchair = values.washWheelchair;
      const disinfectLiftsAndWashSlingsSundays = values.disinfectLiftsAndWashSlingsSundays;
      const restockGlovesWipesClothsAttendsGarbagebags = values.restockGlovesWipesClothsAttendsGarbagebags;
      //axios.post("http://localhost:4001/api/notes", { values })
      axios({
          method: "POST",
          url: "http://localhost:4001/api/nightlist",
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
      flexWrap: 'wrap',
      alignItems: 'center'
   }

   const RowStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      alignContent: 'flex-start',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
   }

   const ItemStyle = {
     alignSelf: 'flex-start',
     justifyContent: 'flex-start'
   }

  return (
    <>
    <h3>Daily Care Checklist - Night Shift</h3>
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
          value="Night"
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
        <hr/>
        </Container>
        
        <Container style={ContainerStyle}>
        <hr/>
        <Row style={RowStyle}>
        <Col style={RowStyle}>
        <hr/>
        <label>Reposition every 2 - 3 hours</label>
        <input style={ItemStyle}
        id="repoEvery2to3Hrs"
        name="repoEvery2to3Hrs"
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
           <Col style={RowStyle}>
           <label>Rounds every 1 - 2 hours</label>
           <input style={ItemStyle}
              id="roundsEvery1to2Hours"
              name="roundsEvery1to2Hours"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           <Col style={RowStyle}>
          <hr/>
           <label>Wash wheelchair</label>
           <input style={ItemStyle}
              id="washWheelchair"
              name="washWheelchair"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           <Col style={RowStyle}>
           <label>Disinfect lifts and wash slings (Sundays)</label>
           <input style={ItemStyle}
              id="disinfectLiftsAndWashSlingsSundays"
              name="disinfectLiftsAndWashSlingsSundays"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
           />
           </Col>
           
          <Col/>
           <Col sm>
           <label>Restock gloves, wipes, cloths, Attends, garbage bags</label>
           <input
              id="restockGlovesWipesClothsAttendsGarbagebags"
              name="restockGlovesWipesClothsAttendsGarbagebags"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.checked}
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

function NightCareList() {
  return <SignupForm />;
}

export default NightCareList;
