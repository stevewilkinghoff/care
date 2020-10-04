import React from 'react';
import Form from 'react-bootstrap/Form';

class PeriCare extends React.Component {
    render() {
        return (
          <form classname="container" formtext-padding="10 px">
            <div className="container" formtext-padding="10 px">
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Peri Care:</Form.Label>
            <Form.Control as="select">
                <option>On Own</option>
                <option>Assisted</option>
                </Form.Control>
            </Form.Group>
            </div>
        </form>
        );
      }
  }

  export default PeriCare;