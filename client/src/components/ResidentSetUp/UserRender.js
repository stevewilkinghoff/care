import React, { useEffect, useState } from 'react';

const list = [
    {id:'a',
    firstname:'Robin',
    lastname: 'Wieruch',
    year: 1988,
    },
    {id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
    },
]

    // component that lists the elements of the list object
    const ListItem = ( { item }) => (
        <li>
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
        </li>
    );

    // component that takes list array as props and maps the array to the ListItem function
    const List = ( {list}) => {
     return(   
    <ul>
        {list.map(item =>(
            <ListItem key={item.id} item={item} />
        ))}
    </ul>
     )};

const UserRender = () => < List list={list} />;

function ResidentList(){
    return <UserRender/>
}

export default ResidentList
