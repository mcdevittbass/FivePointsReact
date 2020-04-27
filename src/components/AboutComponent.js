import React from 'react';
import FooterLarge from './FooterLarge';
import { Container, Row, Col } from 'reactstrap';
import FPButton from './FPButtons';
import { BUTTONS } from '../shared/buttons';

function About(props) {
    return (
        <React.Fragment>
            <Container className="mx-auto">
                <Row className="p-3 row-content align-items-center">
                    <img className="img-fluid" size="max-width: 100%; height: auto;" src="/img/K+M.jpg" alt="Kevin and Melissa" />
                {/* https://buffalonews.com/2018/05/22/supporter-loans-let-five-points-bakery-bypass-banks/*/}
                </Row>

                <Row className="row-content align-items-center">
                    <Col className="paragraph center-text">
                        <h1>About Five Points</h1> 
                        <p><br /><br /><br />Something written by Melissa about local ingredients <br /><br /><br /></p>
                    </Col>
                </Row>

                <FPButton items={BUTTONS[2]} />
            </Container>
            <FooterLarge />
        </React.Fragment>
    );
}

export default About;