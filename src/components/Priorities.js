import React, { useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import AOS from 'aos';

function Priorities(props) {

    return (
        <div className="prioritiesdiv">
            <React.Fragment>
                
                <a name="priorities" />

                <h1 className="text-center" data-aos="fade-up">Our top priorities</h1>

                <CardDeck className="jumbotroncardsdeck" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="fas fa-clipboard-list"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Fulfill your <br /> requests</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="fas fa-cog"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Help you build <br /> the brand <br /> you dreamt of</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="far fa-laugh-beam"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Make sure <br /> you enjoy our product</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>

                </React.Fragment>
        </div>
    )
}

export default Priorities
