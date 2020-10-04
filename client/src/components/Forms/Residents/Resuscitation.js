import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

class Resuscitation extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Resuscitation</Form.Label>
            <Form.Control as="select">
                <option>R1</option>
                <option>R2</option>
                <option>R3</option>
                <option>M1</option>
                <option>M2</option>
                <option>C1</option>
                <option>C2</option>
            </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default Resuscitation