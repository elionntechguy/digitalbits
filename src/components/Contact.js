import React from 'react'
import styled from 'styled-components';
import '../App.css';
import logo from '../assets/transparentpng.png';
import banner from '../assets/mainbanner.jpg';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

    .container {
        margin-top: 60px;
        width: 100%;
        border-radius: 14px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
        border: none;
        padding: 80px;
    }

    .container > i {
        font-size: 22px;
        padding: 20px;
    }

    a {
        text-decoration: none;
        color: #696969;
        font-family: 'Helvetica Neue';
        margin-left: 8px;
        font-size: 20px;
        transition: 0.15s ease;
        font-weight: 400;
    }
    
    a:hover {
        color: #000;
    }

    @media only screen and (max-width: 576px) {
        .container {
            width: 80% !important;
            padding: 40px;
        }
        i > a {
            font-size: 16px;
        }

        #description {
            margin-top: 40px;
            text-align: center !important;
        }

    }

    @media only screen and (min-width: 576px) {
        #description {
            text-align: right !important;
        }

    }

`;
function Contact() {
    return (
        <Styles>

            <a name="contact" />

            <h1 className="text-center" data-aos="fade-up" data-aos-offset="900">
                Get in touch with us
            </h1>

            <Container data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="700">


                <Row>
                    <Col sm={8}>
                        <i class="fas fa-envelope"><a href="mailto:digitalbitsdb@gmail.com">digitalbitsdb@gmail.com</a></i>
                        <br />
                        <br />
                        <i class="fab fa-facebook"><a target="_blank" href="https://www.facebook.com/digitalbitsdb">fb.com/digitalbitsdb</a></i>
                        <br />
                        <br />
                        <i class="fab fa-instagram"><a target="_blank" href="https://www.instagram.com/digitalbitsdb/">instagram.com/digitalbitsdb</a></i>
                    </Col>
                    <Col sm={4} id="description">
                        <p style={{fontSize: '18px'}}>
                            Contact us about your web development, web design, graphic design, and brand management needs, and more!
                        </p>
                    </Col>
                </Row>



            </Container>

        </Styles>
    )
}

export default Contact
