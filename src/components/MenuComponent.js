import React from 'react';
import { ToastCarousel } from './CarouselComponent';
import FooterLarge from './FooterLarge';
import { Container} from 'reactstrap';
import { BUTTONS } from '../shared/buttons';
import FPButton from './FPButtons';

//Menu buttons rendered from FPButton and BUTTONS array (from buttons.js)
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