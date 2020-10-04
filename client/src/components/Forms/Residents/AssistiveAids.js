import React from 'react';
import Form from 'react-bootstrap/Form';

class AssistiveAids extends React.Component {
    render() {
        return (
          
          <Form classname="container" formtext-padding="10 px">
              <Form.Label>Assistive Devices</Form.Label>
                  
                {['checkbox'].map((type) => (
                <div key={'Hearing Aid - left ear'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Hearing Aid - left ear'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Hearing Aid - right ear'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Hearing Aid - right ear'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Glasses'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Glasses'}
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

  export default AssistiveAids;