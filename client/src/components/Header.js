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


class Header extends React.Component {
    render() {
        return (
           <>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Care Cottages</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Resident" id="basic-nav-dropdown">
                <NavDropdown.Item href="/residents">Resident Listing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addresident">New Resident</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/morningchecklist">Daily Care Checklist - Morning</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/eveningchecklist">Daily Care Checklist - Evening</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/nightchecklist">Daily Care Checklist - Night</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/residentassessment">Resident Assessment</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Employees" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employeeadd">Add Employee</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employeeorientation">Employee Orientation</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cottages">Willow</NavDropdown.Item>
                <NavDropdown.Item href="/spruce">Spruce</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar>
            </>
        );
}
};

export default Header;
