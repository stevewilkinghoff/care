import React from 'react';
import axios from 'axios';
import { useFormik, Form, Formik, Field } from "formik";
import "../styles.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 const NestedExample = () => (
     <div>
         <h3>Shit</h3>
         <Formik
            initialValues={{
                taskListCareForResidents:{
                    name:'Care for residents',
                    value:true
                },
                
            }}
            onSubmit={values => {
                console.log(values);
                //const taskListCareForResidentsName=values.taskListCareForResidents.name;
                axios({
                    method: "POST",
                    url: "http://localhost:4001/api/afternoontasksadd",
                    data: values
                  })
            }}
            >

            <Form>
            <Field 
            name="taskListCareForResidents.name"
            id="taskListCareForResidents.name"
            type="field"
            />
            <hr/>
            <Field 
            name="taskListCareForResidents.value"
            id="taskListCareForResidents.value"
            type="checkbox"
            />
            <button type="submit">Submit</button>
            </Form>
            </Formik>
     </div>
 )
 
 export default NestedExample;