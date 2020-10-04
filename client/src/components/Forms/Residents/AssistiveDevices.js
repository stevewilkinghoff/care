import React from 'react';
import Form from 'react-bootstrap/Form';

class AssistiveDevices extends React.Component {
    render() {
        return (
          
          <Form classname="container" formtext-padding="10 px">
              <Form.Label>Assistive Devices</Form.Label>
                  
                {['checkbox'].map((type) => (
                <div key={'Walker'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Walker'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Wheelchair'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Wheelchair'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Prosthetic'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Prosthetic'}
                />
                </div>
                ))} 

                {['checkbox'].map((type) => (
                 <div key={'Other'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Other'} 
                />
                <input type="text" margin="2px" style={{width: "100px", height: "25px"}}/>
                </div>

                ))}             


                </Form>
            )
                }}

  export default AssistiveDevices;