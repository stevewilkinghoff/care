import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import { setNestedObjectValues } from 'formik';
//import './ResidentsPage.css'

const GetDailyTaskHistory = () => {
    //const [data, setData] = useState({residents:[{id:"_id", name:"residentFirstName"}]});
    const [data, setData] = useState({dailytasks: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4001/api/dailytaskhistory',
               
        );
        setData(result.data);
        console.log(result)
    };
        fetchData();
    } ,[]);

        const renderHeader = () =>{
            let headerElement = ['Date', 'Name', 'Signoff']

            return headerElement.map((key, index) => {
                return <th key={index}>{key} </th>
         })
        }

        const renderBody = () => {
            return data && data.dailytasks.map(({_id, taskListDate, taskListStaffName}) => {
                
                return (
                    <tr key={_id}>
                        
                        <td>{taskListDate}</td>
                        <td>{taskListStaffName}</td>
                        
                    </tr>
                )
            })
        }

        const renderObject = () => {
            //return data && data.dailytasks.map(({_id, dailytasks}) => {
              return data && data.dailytasks.map(({_id, taskListDate, taskListCareForResidents, taskListStaffName}) => {   
                return (
                    <tr key={_id}>
                        
                <td>{taskListDate}</td>
                <td>{taskListStaffName}</td>
                <td>{taskListCareForResidents}</td>
                
                    </tr>
                )
            })
        }

        
    return (
        <>
        <h1 id="title">Daily Tasks</h1>
        <table id="dailytasks">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderObject()}
            </tbody>
        </table>
        </>
    )
}

export default GetDailyTaskHistory;

//export default Appy;

//{renderBody()}

