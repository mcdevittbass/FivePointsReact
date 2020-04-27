import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';

class FPButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'invert(0%)'
        }
    }
    handleMouseEnter = () => {
        this.setState({filter: 'invert(100%'})
    }
    handleMouseLeave = () => {
        this.setState({filter: 'invert(0%'})
    }
    render() {
        let filter = this.state.filter;
        return (
            <React.Fragment>
                <Row className="justify-content-center py-4">
                    <Col className="text-center">
                        <a role="button" id="menuButton" href={this.props.items.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}>
                            <img className="img-fluid w-25" 
                                src={this.props.items.src} 
                                alt={this.props.items.alt}
                                style={{filter: filter}}/>
                        </a>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default FPButton;