import React from 'react';
import FooterLarge from './FooterLarge';
import { Container, Row, Col } from 'reactstrap';

//No content yet
function Press(props) {
    return (
        <React.Fragment>
            <Container clasName='container-fluid'>
                <Row>
                    <Col className="text-center p-5">
                        <h5 style={{color:'#f7fcfe'}}>Press page coming soon...</h5>
                    </Col>
                </Row>
            </Container>
            <FooterLarge />
        </React.Fragment>
    )
}
export default Press;