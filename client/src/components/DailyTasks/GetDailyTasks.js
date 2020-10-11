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
        setData(result.data) ;
        console.log((JSON.stringify(result.data, null, 2)));
    };
        fetchData() ;
    } ,[]);
    console.log(data);

        const renderHeader = () =>{
            let headerElement = ['Date', 'Shift', 'Care', 'SignOff' ,'Care for res', 'Admin meds', 'Shower & water temp tests','Scheduled room cleaning']
            
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
            const checkTrue = (item) => {
                if (item===true){
                    return(item.toString());
                }
            }
            //return data && data.dailytasks.map(({_id, dailytasks}) => {
              return data && data.dailytasks.map(({_id, taskListDate, taskListStaffName, taskListCareForResidents, taskListShift, taskListAdministerMedicine, taskListScheduledShowersWaterTempTest, taskListSignOff, taskListScheduledRoomCleaning},item) => {   
              
               
              return (
                    <tr key={_id}>
                        
                <td>{taskListDate}</td>
                <td>{taskListShift}</td>
                <td>{taskListCareForResidents.name}</td>
                <td>{taskListSignOff}</td>
                <td>{taskListAdministerMedicine}</td>
                <td>{taskListScheduledShowersWaterTempTest}</td>
                
                                
                    </tr>
                )
            })

            }

            const renderShit = () => {
            data.dailytasks.map(({item})=>{
              return (<div>{item.taskListCareForResidents()}</div>);
            })}
          

        
    return (
        <>
        <h1 id="title">Daily Tasks</h1>
        <table id="dailytasks">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
        </>
    )
}

export default GetDailyTaskHistory;

//export default Appy;

//{renderBody()}

