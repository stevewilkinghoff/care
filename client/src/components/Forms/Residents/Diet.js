import React from 'react';
import Form from 'react-bootstrap/Form';

class Diet extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Diet</Form.Label>
            <Form.Control as="select">
                <option>Normal</option>
                <option>Food Cut</option>
                <option>Pureed Food</option>
                <option>Other</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default Diet;