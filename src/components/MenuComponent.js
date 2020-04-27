import React from 'react';
import { ToastCarousel } from './CarouselComponent';
import FooterLarge from './FooterLarge';
import { Container} from 'reactstrap';
import { BUTTONS } from '../shared/buttons';
import FPButton from './FPButtons';

const Menu = (props) => {
    return (
        <React.Fragment>
            <ToastCarousel />
            <Container className="my-4">
                <FPButton items={BUTTONS[0]} />
                <FPButton items={BUTTONS[1]} />
            </Container>
            <FooterLarge />  
        </React.Fragment>      
    );
}
export default Menu;


/* old instance with button group
class Menu extends Component {
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
        return (
            <React.Fragment>
                <ToastCarousel />
                    <Container className="my-4">
                        <Row className="justify-content-center py-2">
                            <Col className="text-center">
                                <a role="button" id="menuButton" href="/img/five_points_menu.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onMouseEnter={this.handleMouseEnter}
                                    onMouseLeave={this.handleMouseLeave}>
                                    <img className="img-fluid w-25" src="/img/menu_button.jpg" alt="menu button"/>
                                </a>
                            </Col>
                        </Row>

                        <Row className="justify-content-center py-2">
                            <Col className="text-center">
                                <a role="button" id="farmButton" href="/img/Farmers Pantry - Feb 28 2020 - 8-23 PM.pdf" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid w-25" src="/img/farm_pantry.jpg" alt="farmers' pantry menu button"/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                <FooterLarge />
            </React.Fragment>
        }
    )
}
export default Menu; */