import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap';

function Services() {
    return (
        <div className="servicesdiv">
            <React.Fragment>

                <a name="services" />

                <h1 className="text-center" data-aos="fade-up" data-aos-offset="500">What we do?</h1>

                <CardDeck className="servicescardsdeck" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="500">

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="fas fa-code"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Web Design <br /> and Web Development</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="fas fa-hashtag"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Brand Management</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '12rem' }}>
                        <i style={{fontSize: '220px', alignSelf: 'center', marginTop: '20px'}} className="fas fa-paint-brush"></i>
                        <Card.Body>
                            <Card.Title style={{fontSize: '24px', marginTop: '10px'}} className="text-center">Graphic Design</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>

                </React.Fragment>
        </div>
    )
}

export default Services
