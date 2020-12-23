import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Modal } from 'react-bootstrap';
import sample from '../assets/sample.jpg';
import sample1 from '../assets/sample1.jpeg';
import sample2 from '../assets/sample2.jpg';
import accepted from '../assets/acceptedd-01.jpg';
import fronadv from '../assets/fronadv-01.jpg';
import mbajdistancen from '../assets/mbajdistancen-01.jpg';



function Work() {

    const [lgShow, setLgShow] = useState(false);



    return (
        <React.Fragment>

            <div className="workdiv">

                <a name="work" />
                
                <h1 className="text-center" data-aos="fade-up" data-aos-offset="300">Our Work</h1>

                <div className="workcardscontainer">
                
                <CardDeck className="workcardsdeck" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300">

                    <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={accepted} />
                        <Card.Body>
                            <Card.Title>Accepted</Card.Title>
                            <Card.Text>
                            This is a project about people with disabilities, they can go on there, and they can browse through different content, and multiple places that people with disabilities can visit.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={fronadv} />
                        <Card.Body>
                            <Card.Title>Fron Advertising</Card.Title>
                            <Card.Text>
                            Fron Advertising is an advertising company based in Kosovo.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={mbajdistancen} />
                        <Card.Body>
                            <Card.Title>Mbaj Distancen COVID-19 API</Card.Title>
                            <Card.Text>
                            Mbaj Distancen is a COVID-19 API for Kosovo.
                            </Card.Text>
                        </Card.Body>
                    </Card>



                </CardDeck>


                </div>

            </div>
            
        </React.Fragment>
    )
}

export default Work
