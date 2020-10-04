import React from 'react';
import Form from 'react-bootstrap/Form';

class ContinenceProds extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Incont Prods Used?</Form.Label>
            <Form.Control as="select">
                <option>Yes</option>
                <option>No</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default ContinenceProds;