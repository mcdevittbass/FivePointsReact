import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardLink } from 'reactstrap';
import FooterSmall from './FooterSmall';

class FooterLarge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            displayIGHandle: false
        }
        //this.handleMouseover = this.handleMouseover.bind(this);
    }

    handleMouseEnter = (event) => {
        this.setState({opacity: 0.5});
        this.setState({displayIGHandle: true})
        event.preventDefault();
    }
    handleMouseLeave = (event) => {
        this.setState({opacity: 1});
        this.setState({displayIGHandle: false})
        event.preventDefault();
    }
    
    render() {
        let igbar = (this.state.opacity === 1) ? "IGBar" : "IGBar2";
        let igOverlay = (this.state.displayIGHandle) ? "IGOverlay2" : "IGOverlay";
        
        return (
        <React.Fragment>
            <Container fluid className="site-footer">
                <Row className="p-2">
                    <Col>
                        <Card onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="my-auto bg-transparent d-none d-md-block" id="IGCard">
                            <CardImg id={igbar} src="img/FPIG.png" alt="Five Points Instagram Bar" />
                            <CardImgOverlay className="text-center my-auto" id={igOverlay}>
                                <CardLink href="https://www.instagram.com/fivepointsbakery/" id="IGLink" target="_blank" rel="noopener noreferrer" className="paragraph text-white bg-transparent">@fivepointsbakery </CardLink>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <FooterSmall display='noDisplay' />
            </Container>
        </React.Fragment>
        );
    }
}
export default FooterLarge;