import React from 'react';
import Form from 'react-bootstrap/Form';

class Toileting extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Toileting</Form.Label>
            <Form.Control as="select">
                <option>Self</option>
                <option>Assisted</option>
                <option>Dependent</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default Toileting;