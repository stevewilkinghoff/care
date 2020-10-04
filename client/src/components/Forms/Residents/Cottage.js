import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

class ResidentCottage extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Resident Cottage</Form.Label>
            <Form.Control as="select">
                <option>Willow (Edmonton)</option>
                <option>Maple (Red Deer)</option>
                <option>Aspen (Red Deer)</option>
                <option>Spruce (Red Deer)</option>
                <option>Spruce (Lacombe)</option>
            </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default ResidentCottage