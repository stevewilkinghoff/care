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
import {BiCheckSquare} from 'react-icons/bi';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


const JumboTron = Jumbotron;


class EntryPage extends React.Component {
    render() {
        return(
        <>
        <JumboTron fluid style={{
            backgroundImage: "url(" + "https://my.carecottages.ca/wp-content/uploads/2017/02/houses-691586_1280.jpg" + ")", imageWidth:1150, backgroundRepeat : 'no-repeat', backgroundSize:'cover', height:600}} >
                
        <div>
        <br/>
        <br/>
        </div>
        <Container>
        </Container>
        </JumboTron>
        
        
        </>
        );
}
};

export default EntryPage;




//background-image:url(https://my.carecottages.ca/wp-content/uploads/2017/02/houses-691586_1280.//jpg); padding-top:70px; background-repeat:no-repeat; background-size:cover;