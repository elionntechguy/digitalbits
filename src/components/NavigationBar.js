import React from 'react';
import styled from 'styled-components';
import '../App.css';
import logo from '../assets/transparentpng.png';
import { Navbar, Nav } from 'react-bootstrap';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #696969 !important;
        
        transition: 0.15s ease;

        &:hover {
            text-decoration: none;
            color: #000 !important;

        }
        margin: 10px;

        
    }
    
    .navbar {
        background-color: #6BB0BF;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    #contactnav {
        background-color: #000;
        border-radius: 10px;
        color: #fff !important;
        width: 80px;
        text-align: center;
        
    }

    @media only screen and (max-width: 992px) {
        #contactnav {
            text-align: center;
        }
    }

`;

function NavigationBar() {
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="navbar-light">
            <Navbar.Brand href="#">
            <img
                src={logo}
                width="170"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                <Nav.Link href="#work">work</Nav.Link>
                <Nav.Link href="#services">services</Nav.Link>
                <Nav.Link href="#about">about</Nav.Link>
                <Nav.Link href="#stories">stories</Nav.Link>
                <Nav.Link id="contactnav" href="#contact">contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar
