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
import DailyTaskCard from '../Cards/DailyTasksCard';
import StartNewResidentCard from '../Cards/StartNewResidentCard';
import {BiCheckSquare} from 'react-icons/bi';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const JumboTron = Jumbotron;


class HarmonyCottage extends React.Component {
    render() {
        return(
        <>
        <JumboTron fluid style={{
            backgroundImage: "url(" + "https://my.carecottages.ca/wp-content/uploads/2018/03/AdobeStock_95578600-e1520291308344.jpeg" + ")", backgroundRepeat : 'no-repeat', width:1000, height:300}} >
                <img src={"https://my.carecottages.ca/index.php?gf-download=07%2F2020%2FAsset-2512.png&form-id=15&field-id=13&hash=a28dbcf44ab9951db2482ff35cca01bd64c14c7e9f6a8cc9f6b07db8745169d5"} style={{mode:'fit', width:300, height:200}}></img>
        <div>
        <br/>
        <br/>
        </div>
        <Container>
        </Container>
        </JumboTron>
        <Row>
            <Col>
        <DailyTaskCard/>
        </Col>
        <Col>
        <StartNewResidentCard/>
        </Col>
        </Row>
        
        </>
        );
}
};

export default HarmonyCottage;
