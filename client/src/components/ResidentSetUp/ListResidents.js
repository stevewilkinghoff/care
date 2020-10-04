import React from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
  ];
   
const TestShit = () => <List list={list} />;
   
  const List = ({ list }) => (
    <ul>
      {list.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
   
  const ListItem = ({ item }) => (
    <li>
      <div>{item.id}</div>
      <div>{item.firstname}</div>
      <div>{item.lastname}</div>
      <div>{item.year}</div>
    </li>
  );





const SignupForm = () => {
  const formik = useFormik({
    initialValues: {residents:[]
                    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
      //const residents = values.residents;
      axios({
          method: "GET",
          url: "http://localhost:4001/api/listresidents",
          data: values
        });
        console.log(ListItem);
        }
    });

    

    // now test sending name and email to a route created that will return the data to screen
    // this is a test to be able to see if we can post to database

  return (
    <>
    <h3>List Residents</h3>
    <form onSubmit={formik.handleSubmit} >
    
    <div/>
      <hr/>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

function ListResidents() {
  return <SignupForm/>;
}

export default ListResidents;


//function IdiomaticReactList(props) {
//  return (
//    <div>
//      {props.items.map((item, index) => (
//        <Item key={index} item={item} />
//      ))}
//    </div>
//  );
//}