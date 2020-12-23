import React from 'react'
import styled from 'styled-components';
import '../App.css';
import logo from '../assets/transparentpng.png';
import banner from '../assets/mainbanner.jpg';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`

    .container {
        margin-top: 60px;
    }

`;

function About() {
    return (
        <Styles>

            <a name="about" />

            <h1 className="text-center" data-aos="fade-up" data-aos-offset="600">
                About
            </h1>

            <Container data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="600">

            <Row>
            <Col sm={8}>
            We're a creative company,
            specializing in web development and design,
            brand management, brand creating, etc.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis ante venenatis urna posuere convallis in faucibus ipsum. Nullam quis luctus dui. Cras egestas, magna eget congue imperdiet, mi erat euismod risus, vel ultricies nisi urna vitae odio. Integer vestibulum augue dolor, congue varius massa egestas in. Fusce ac ante ut leo commodo condimentum congue vitae arcu. Donec cursus gravida viverra. Sed vel tortor justo. Donec vulputate sodales mattis. Integer congue malesuada nisi convallis pulvinar. Donec convallis sed magna id tempor. Suspendisse eget tortor eget magna consectetur ultrices. Quisque ut felis id ante convallis sollicitudin ut non nibh.

            Donec eu pretium metus. Etiam ullamcorper dignissim magna, at venenatis nisi feugiat nec. Quisque sed elit nec erat tempor sodales. Maecenas faucibus commodo tempor. Etiam at laoreet turpis. Aenean tincidunt ultrices leo, in porttitor nunc mattis vel. In blandit ultrices blandit. Phasellus lobortis ex sapien, vitae venenatis diam hendrerit ac. Vivamus vel sodales nisl.
            </Col>

            <Col sm={4}>
            <i id="codeicon" class="fas fa-laptop-code" style={{ fontSize: '220px', display: 'flex', justifyContent: 'center', alignSelf: 'center', marginTop: '20px' }} />
            </Col>
            </Row>
            </Container>
        </Styles>
    )
}

export default About
