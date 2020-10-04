import React, {useState, useEffect}  from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";

const Appy = () => {
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

    return (
        <>
        <div>
        <ul>
           {data.residents.map(thing=> (
            <li key={thing._id}>
            <div>{thing.residentFirstName} {thing.residentLastName}</div>
            <div>{thing.residentLastName}</div>
            </li>
            ))}
            </ul>
            </div>
            </>
            );
    

    
    }

export default Appy;

//export default Appy;


