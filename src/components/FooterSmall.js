import React from 'react';
import { Container, Row, Col} from 'reactstrap';

function FooterSmall(props) {
    return (
        <Container>
            <Row className="justify-content-center">
                    <Col className="py-5 text-center">
                        <a href="https://www.facebook.com/Five-Points-Bakery-85213183615/" target="_blank" rel="noopener noreferrer" className="mx-auto p-1"><i className="fa fa-facebook-square fa-3x fa-inverse"></i></a>
                        <a href="https://www.instagram.com/fivepointsbakery/" target="_blank" rel="noopener noreferrer" className={props.display}><i className=" mx-auto p-1 fa fa-instagram fa-3x fa-inverse"></i></a>
                    </Col>
                </Row>
        </Container>
    );
}
export default FooterSmall;