import React, {useState, useEffect}  from 'react';
import axios from 'axios';
//import './ResidentsPage.css'

const Appy1 = () => {
    //const [data, setData] = useState({residents:[{id:"_id", name:"residentFirstName"}]});
    const [data, setData] = useState({residents: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4002/api/residents',
               
        );
        setData(result.data);
        console.log(result)
    };
        fetchData();
    } ,[]);

        const renderHeader = () =>{
            let headerElement = ['First Name', 'Last Name']

            return headerElement.map((key, index) => {
                return <th key={index}>{key} </th>
         })
        }

        const renderBody = () => {
            return data && data.residents.map(({_id, residentFirstName, residentLastName}) => {
                return (
                    <tr key={_id}>
                        
                        <td>{residentFirstName}</td>
                        <td>{residentLastName}</td>
                    </tr>
                )
            })
        }


    return (
        <>
        <h1 id="title">React Table</h1>
        <table id="residents">
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

export default Appy1;

//export default Appy;


