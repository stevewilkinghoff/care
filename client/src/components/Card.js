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

//const checkSquare = AiOutlineCheckSquare;


class Card1 extends React.Component {
    render() {
        return(
        <>
        <a href="http://example.com" color="purple">
        <div>
        <Card style={{ width: '18rem', color:"purple"}}>
        <Card.Body>
        <h3 align="center"><BiCheckSquare color="purple"></BiCheckSquare></h3>
        <Card.Title align="center">Card Title</Card.Title>
        </Card.Body>
        </Card>
        </div>
        </a>
        </>
        );
}
};

export default Card1;
