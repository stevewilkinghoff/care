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
import DailyTaskCard from './Cards/DailyTasksCard';
import {BiCheckSquare} from 'react-icons/bi';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


const JumboTron = Jumbotron;


class Cottages extends React.Component {
    render() {
        return(
        <>
        <JumboTron fluid style={{
            backgroundImage: "url(" + "https://my.carecottages.ca/wp-content/uploads/2018/03/AdobeStock_95578600-e1520291308344.jpeg" + ")", backgroundRepeat : 'no-repeat', width:1000}} >
                <img src={"https://my.carecottages.ca/wp-content/uploads/gravity_forms/15-5ed52046c7274596f0fb75ef1cd73f3b/02/2018/Willow-Logo-Transparent-background.png"} style={{mode:'fit', width:300, height:200}}></img>
        <div>
        <br/>
        <br/>
        </div>
        <Container>
        </Container>
        </JumboTron>
        <DailyTaskCard/>
        
        </>
        );
}
};

export default Cottages;
