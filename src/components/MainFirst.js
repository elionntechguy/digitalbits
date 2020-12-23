import React from 'react';
import styled from 'styled-components';
import '../App.css';
import logo from '../assets/transparentpng.png';
import banner from '../assets/mainbanner.jpg';
import { Jumbotron, Container } from 'react-bootstrap';


const Styles = styled.div`
    
    .jumbotron {
        background: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${banner});
        background-size: cover;
        height: 600px;
        
    }

`;


function MainFirst() {
    return (
        <Styles>
            <Jumbotron fluid>
                <Container>
                    <h1 className="text-left">We like to build websites,
                        <br />
                        and other stuff as well :)
                    </h1>
                    <p className="text-left">
                    We're a creative company,
                    <br />
                    specializing in web development and design,
                    <br />
                    brand management, brand creating, etc.
                    </p>
                </Container>
            </Jumbotron>
        </Styles>
    )
}

export default MainFirst
