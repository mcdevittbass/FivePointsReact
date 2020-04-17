import React from 'react';
import { ToastCarousel } from './CarouselComponent';
import FooterLarge from './FooterLarge';
import { Container, Row, Col, ButtonToolbarProps} from 'reactstrap';

function Menu(props) {
    return (
        <React.Fragment>
            <ToastCarousel />
                <Container className="my-4">
                    <Row className="justify-content-center py-2">
                        <Col className="text-center">
                            <a role="button" id="menuButton" href="/img/five_points_menu.pdf" target="_blank" rel="noopener noreferrer">
                                <img class="img-fluid w-25" src="/img/menu_button.jpg" alt="menu button"/>
                            </a>
                        </Col>
                    </Row>

                    <Row className="justify-content-center py-2">
                        <Col className="text-center">
                            <a role="button" id="farmButton" href="/img/Farmers Pantry - Feb 28 2020 - 8-23 PM.pdf" target="_blank" rel="noopener noreferrer">
                                <img class="img-fluid w-25" src="/img/farm_pantry.jpg" alt="farmers' pantry menu button"/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            <FooterLarge />
        </React.Fragment>
    )
}
export default Menu;