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
import MorningTaskCard from '../Cards/MorningTasksCard';
import AfternoonTaskCard from '../Cards/AfternoonTasksCard';
import EveningTaskCard from '../Cards/EveningTasksCard';
import {BiCheckSquare} from 'react-icons/bi';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const JumboTron = Jumbotron;


class DailyTasksPage extends React.Component {
    render() {
        return(
        <>
        <JumboTron fluid style={{
            backgroundImage: "url(" + "https://my.carecottages.ca/wp-content/uploads/2018/03/AdobeStock_95578600-e1520291308344.jpeg" + ")", backgroundRepeat : 'no-repeat', width:1000}} >
        <div>
        <br/>
        <br/>
        </div>
        <Container>
        </Container>
        </JumboTron>
        <Row>
            <Col>
            <MorningTaskCard/>
            </Col>
            <Col>
            <AfternoonTaskCard/>
            </Col>
            <Col>
            <EveningTaskCard/>
            </Col>
        </Row>
        
        </>
        );
}
};

export default DailyTasksPage;
