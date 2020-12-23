import React from 'react'
import logo from '../assets/transparentpng.png'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">

                <Container>

                    <Row>

                        <Col md={5}>
                            <img src={logo} width="170" className="d-inline-block align-top footername"/>
                        </Col>
                        <Col id="footermiddle" md={4}>
                            
                        </Col>
                        <Col id="footersocial" md={3}>
                        <a href="mailto:digitalbitsdb@gmail.com"><i class="fas fa-envelope"></i></a>
                        <br />
                        <br />
                        <a target="_blank" href="https://www.facebook.com/digitalbitsdb"><i class="fab fa-facebook"></i> </a>
                        <br />
                        <br />
                        <a target="_blank" href="https://www.instagram.com/digitalbitsdb/"><i class="fab fa-instagram"></i></a>
                        </Col>
                        <Col md={12} id="midfooter">
                            <small id="footersmall">All rights reserved 2020 digitalBits</small>
                        </Col>
                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default Footer
