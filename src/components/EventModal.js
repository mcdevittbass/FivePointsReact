import React, { Component } from 'react';
import { Container, Modal, Col, Button, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';


class EventModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            name: '',
            email: '',
            phone: '',
            date: '',
            guests: '',
            message: ''
        }
    }

    toggleModal = () => {
        this.setState(
            {isModalOpen: !this.state.isModalOpen}
        );
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'select' ? target : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit = (event) => {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Col className='text-center'>
                    <Button className='btn-light' onClick={this.toggleModal}>
                        Request More Information
                    </Button>
                </Col>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Request Event Information</ModalHeader>
                    <ModalBody>
                        <Container className='container-fluid'>
                        <Form id="eventForm" onSubmit={this.handleSubmit}>
                            <FormGroup className="row">
                                <Col>
                                    <Label className="col-form-label" htmlFor="name">Name</Label>
                                </Col>
                                <Col className="col-sm-8">
                                    <Input type="text" id="name" name="name" placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col>
                                    <Label className="col-form-label" htmlFor="email">Email</Label>
                                </Col>
                                <Col className="col-sm-8">
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col>
                                    <Label className="col-form-label" htmlFor="phone">Phone</Label>
                                </Col>
                                <Col className="col-sm-8">
                                    <Input type="phone" id="phone" name="phone" placeholder="Phone" 
                                    value={this.state.phone}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col>
                                    <Label class="col-form-label" htmlFor="date">Date of Event</Label>
                                </Col>
                                <Col class="col-sm-8 align-items-center">
                                    <Input type="date" id="date" name="date" placeholder="date" 
                                    value={this.state.date}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col>
                                    <Label className="col-form-label" htmlFor="numGuests">Number of Guests</Label>
                                </Col>
                                <Col class="col-sm-8">
                                    <Input type='select' name="select" id="numGuests" 
                                        value={this.state.guests}
                                        onChange={this.handleInputChange}>
                                        <option>select...</option>
                                        <option>Under 10</option>
                                        <option>10-20</option>
                                        <option>20-30</option>
                                        <option>30-40</option>
                                        <option>40-50</option>
                                        <option>Over 50</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col className="mx-auto">
                                    <Input type="textarea" id="message" name="textarea" rows="8" placeholder="Tell us about your event"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 9}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        </Container>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EventModal;