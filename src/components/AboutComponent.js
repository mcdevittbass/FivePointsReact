import React, { Component } from 'react';
import FooterLarge from './FooterLarge';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import FPButton from './FPButtons';
import { BUTTONS } from '../shared/buttons';
import { baseUrl } from '../shared/baseURL';
//Rendered in the About component: image of Kevin and Melissa and blurb from Melissa
//Other components rendered inside About: Button created in FPButtons.js, FooterLarge
function About(props) {
    return (
        <React.Fragment>
            <Container className="mx-auto">
                <Row className="p-3 row-content align-items-center">
                    <img className="img-fluid" size="max-width: 100%; height: auto;" src={baseUrl + "/img/K+M.jpg"} alt="Kevin and Melissa" />
                {/* https://buffalonews.com/2018/05/22/supporter-loans-let-five-points-bakery-bypass-banks/*/}
                </Row>

                <Row className="row-content align-items-center">
                    <Col className="paragraph text-center">
                        <h1>About Five Points</h1> 
                        <p><br /><br /><br />Something written by Melissa about local ingredients <br /><br /><br /></p>
                    </Col>
                </Row>

                <ZineModal />
            </Container>
            <FooterLarge />
        </React.Fragment>
    );
}

class ZineModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }
    toggleModal = () => {
        this.setState(
            {isModalOpen: !this.state.isModalOpen}
        );
    }
    render () {
        return (
            <React.Fragment>    
                <Col className='text-center'>
                    <FPButton items={BUTTONS[2]} onClick={this.toggleModal}/>     
                </Col>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size={"sm"}>
                    <ModalHeader toggle={this.toggleModal}>Five Points Digital Zine</ModalHeader>
                    <ModalBody>
                        Coming soon...
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default About;