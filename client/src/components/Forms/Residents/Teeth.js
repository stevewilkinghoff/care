import React from 'react';
import Form from 'react-bootstrap/Form';

class Teeth extends React.Component {
    render() {
        return (
          
          <Form classname="container" formtext-padding="10 px">
              <Form.Label>Teeth</Form.Label>
                  
                {['checkbox'].map((type) => (
                <div key={'Own'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Own'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Dentures - upper'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Dentures - upper'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Dentures - lower'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Dentures - lower'}
                />
                </div>
                ))}

                {['checkbox'].map((type) => (
                <div key={'Partials - upper'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Partials - upper'}
                />
                </div>
                ))} 

                {['checkbox'].map((type) => (
                <div key={'Partials - lower'} className="mb-3">
                <Form.Check 
                type={type}
                id={type}
                label={'Partials - lower'}
                />
                </div>
                ))} 

                        


                </Form>
            )
                }}

  export default Teeth;