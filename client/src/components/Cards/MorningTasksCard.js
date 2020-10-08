import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import {BiCheckSquare} from 'react-icons/bi';

class MorningTaskCard extends React.Component {
    render() {
        return(
        <>
        <a href="/morningtasks" color="purple">
        <div>
        <Card style={{ width: '18rem', color:"purple"}}>
        <Card.Body>
        <h3 align="center"><BiCheckSquare color="purple"></BiCheckSquare></h3>
        <Card.Title align="center">Morning Shift Tasks</Card.Title>
        </Card.Body>
        </Card>
        </div>
        </a>
        </>
        );
}
};

export default MorningTaskCard;
