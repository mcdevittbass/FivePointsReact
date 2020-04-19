import React from 'react';
import { EventCarousel } from './CarouselComponent';
import FooterSmall from './FooterSmall';
import { Container, Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';
import EventModal from './EventModal';

function EventSpace(props) {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <EventCarousel />
                    </Col>
                </Row>
                <Row className="row-content align-items-start justify-content-center my-4">
                    <Col className="col-sm-5 address">
                        <p>Host your event on our beautiful second floor. Perfect for company parties, business networking events, baby showers, birthday parties, and more!</p>
                    </Col>
                    <Col className="col-sm-5 address">
                        <p>*Unfortunately, we do not allow private parties from 7am-3pm on Friday, Saturday, and Sunday.
                        <br /> *WiFi and parking included
                        <br /> *Times include setup and breakdown
                        <br /> *Prices are open to negotiation, depending on your needs
                        <br /> *There is currently no wheelchair access to the second floor
                        </p>
                    </Col>     
                </Row>
                <Row className="row-content">
                    <EventCard1 />
                    <EventCard2 />
                </Row>
                <Row className='p-4'>
                    <EventModal />
                </Row>
            </Container>
            <FooterSmall />
        </React.Fragment>
    );
}

function EventCard1(props) {
    return (
        <Col className="col col-md-6 mx-auto align-items-start">
            <Card sm="6" className="bg-light event_card h-100" id="hourCard">
                <CardHeader className="mx-auto my-auto bg-light">
                    <h4><strong>Hourly Rental Options</strong></h4>
                </CardHeader>
                <CardBody className="p-0">
                    <Table className="table text-center table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Monday-Thursday</th>
                                <th scope="col">Friday-Sunday</th>
                            </tr>    
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">7am-3pm</th>
                            <td>$125/hr</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <th scope="row">3pm-6pm</th>
                            <td>$75/hr</td>
                            <td>$125/hr</td>
                        </tr>
                        <tr>
                            <th scope="row">6pm-11pm</th>
                            <td>$50/hr</td>
                            <td>$75/hr</td>
                        </tr>  
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Col>
    );
}
function EventCard2(props) {
    return (
        <Col className="col col-md-6 align-items-start text-center">
            <Card sm="6" className="bg-light event_card h-100" id="refreshCard">
                <CardHeader className="mx-auto my-auto bg-light">
                    <h4><strong>Refreshments</strong></h4>
                </CardHeader>
                <CardBody className="p-0">
                    <Table className="text-center table-borderless">
                        <tbody>
                        <tr>
                            <th scope="row">Coffee and Tea</th>
                            <td>$3/person</td>
                        </tr>
                        <tr>
                            <th scope="row">Whole Grain baked goods</th>
                            <td>$4/person</td>
                        </tr>
                        <tr>
                            <th scope="row">Beer, Wine, Cocktails</th>
                            <td>Contact us for pricing</td>
                        </tr>  
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Col>
    );
}
export { EventSpace };
