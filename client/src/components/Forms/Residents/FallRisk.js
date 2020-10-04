import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

class FallRisk extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Fall Risk?</Form.Label>
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

  export default FallRisk;