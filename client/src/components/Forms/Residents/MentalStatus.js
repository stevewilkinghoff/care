import React from 'react';
import Form from 'react-bootstrap/Form';

class MentalStatus extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Mental Status</Form.Label>
            <Form.Control as="select">
                <option>Alert</option>
                <option>Non-Alert</option>
                <option>Other</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default MentalStatus;