import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import FooterSmall from './FooterSmall';
import { AddressCard } from './HomeComponents';
import { baseUrl } from '../shared/baseURL';


//created in ContactForm component: contact controlled form
//Other components rendered in it: AddressCard from HomeComponent, FooterSmall
class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleInputChange = (event) => {
        const valueType = event.target.name;

        this.setState({[valueType]: event.target.value});
    }
    
    //later on, this information will go somewhere!
    handleSubmit = (event) => {
        alert('The information you entered is ' + JSON.stringify(this.state));
    }

    render() {
        return (
            <React.Fragment>
                <Container className="container-fluid mx-auto m-0 cinnroll" style={{backgroundImage: `${baseUrl}/img/cinnroll.jpg`}}>
                    <Row className="p-4">
                        <Col className="col-md-8 mx-auto">
                            <Card id="contactCard">
                                <CardHeader>
                                    <Col className="col-12 text-center p-2">
                                        <h2>Contact Us</h2>
                                    </Col>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup className="row align-self-center">
                                            <Col className="mx-auto">
                                                <Input type="text" className="form-control" id="name" name="name" placeholder="Name" 
                                                    value={this.state.name} onChange={this.handleInputChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="row">
                                            <Col className="mx-auto">
                                                <Input type="email" id="email" name="email" placeholder="Email"
                                                    value={this.state.email} onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="row">
                                            <Col className="mx-auto">
                                                <Input type="textarea" id="message" name="message" rows="8" placeholder="Message"
                                                    value={this.state.message} onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="row">
                                            <Col className="col-md-10 offset-sm-10">
                                                <Button type="submit" className="btn submitBtn" >Send</Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </CardBody>                            
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <AddressCard />
                <FooterSmall />
            </React.Fragment>
        );
    }
}

export default ContactForm;