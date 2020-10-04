import React from 'react';
import Form from 'react-bootstrap/Form';

class LaundryDoneBy extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Laundry Done By:</Form.Label>
            <Form.Control as="select">
                <option>Cottage</option>
                <option>Resident/Family</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default LaundryDoneBy;