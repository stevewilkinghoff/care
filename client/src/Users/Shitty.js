import React, {useState} from 'react';

const Shitty = () => {
   //Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};

//function FuckingShit() {
//    return <Shitty />;
//  }
  
export default Shitty