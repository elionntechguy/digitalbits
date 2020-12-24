import React from 'react'
import styled from 'styled-components';
import '../App.css';
import logo from '../assets/transparentpng.png';
import banner from '../assets/mainbanner.jpg';
import sample from '../assets/sample.jpg';
import sample1 from '../assets/sample1.jpeg';
import sample2 from '../assets/sample2.jpg';
import { Card, CardDeck, Button } from 'react-bootstrap';

function Stories() {
    return (
        <div className="storiesdiv">
        <React.Fragment>

            <a name="stories" />

            <h1 className="text-center" data-aos="fade-up" data-aos-offset="600">Stories</h1>

            <div className="storiescardscontainer" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="600">

                <CardDeck className="storiescardsdeck">

                    <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>



                </CardDeck>
            </div>
            </React.Fragment>
        </div>
    )
}

export default Stories
