import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardLink } from 'reactstrap';
import FooterSmall from './FooterSmall';
import { baseUrl } from '../shared/baseURL';

//Instagram photo bar with Facebook icon from FooterSmall (set to show IG icon only on XS viewports when photo bar is hidden)
class FooterLarge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            display: 'none',
        }
    }
    //change the opacity and add text on hover
    handleMouseEnter = (event) => {
        this.setState({opacity: 0.5});
        this.setState({display: 'block'});
        event.preventDefault();
    }
    handleMouseLeave = (event) => {
        this.setState({opacity: 1});
        this.setState({display: 'none'});
        event.preventDefault();
    }
    
    render() {
        let display = this.state.display;
        let opacity = this.state.opacity;
        return (
        <React.Fragment>
            <Container fluid className="site-footer">
                <Row className="p-2">
                    <Col>
                        <Card onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="my-auto bg-transparent d-none d-md-block">
                            <CardImg style={{opacity: opacity }} src={baseUrl + '/img/FPIG.png'} alt="Five Points Instagram Bar" />
                            <CardImgOverlay className="text-center my-auto" style={{display: display}}>
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