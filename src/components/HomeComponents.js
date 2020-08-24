import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FooterLarge from './FooterLarge';
import { baseUrl } from '../shared/baseURL';

//Photo and blurb rendered in HomePage Component along with FooterLarge and AddressCard
export function AddressCard(props) {
    return (
        <Row className="p-3 row-content align-items-center">
            <Col className="text-center">
                <p className="address"> 
                Five Points Bakery <br />
                44 Brayton Street <br />
                Buffalo, NY 14213<br />
                716.884.8888 <br /><br /> 
                <u>HOURS</u> <br />
                8:30am to 3:30pm Every Day <br />
                We have our full cafe menu available and socially distanced outdoor seating for 100+
                on our large grounds. We also have our whole grain breads, pastries, and grocery staples.
                Check our offerings on our <a href='#/menu' id='basicLink'>menu page</a> and call in your order at 716-884-8888.</p>
            </Col>
        </Row>
    );
}
export function HomePage(props) {
    return (
        <React.Fragment>
            <Container>
                <Row className="p-3 row-content align-items-center">
                <img className="img-fluid"  src={baseUrl + "/img/gate.jpg"} alt="Five Points outside" />
            {/* https://www.google.com/search?q=five+points+bakery&tbm=isch&ved=2ahUKEwiMsYS8osXoAhWzcc0KHbFGAtEQ2-cCegQIABAA&oq=five+points+bakery&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzICCAAyAggAMgIIADIECAAQGDIECAAQGDIECAAQGDIECAAQGDIECAAQGDoECAAQHlCkxQRY68wEYOfRBGgAcAB4AYABuwKIAZYHkgEHMy4zLjAuMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=EoKDXozgJ7PjtQaxjYmIDQ&bih=612&biw=1278#imgrc=uTtc7CqUtYB7wM  */}
                </Row>
                <Row className="paragraph p-3 row-content align-items-center values">
                    <Col className="col-4 align-items center values">
                        <p>Simple <br />Timeless <br />Honest <br />Balanced <br /> Really Good.</p>
                    </Col>
                    <Col className="paragraph">
                        <p>Five Points Bakery values the highest quality ingredients, sourced locally. Our wheat comes from an Erie County farm and we mill our flour on site. Come by and buy a loaf, have a delicious baked good or toast plate, and enjoy our beautiful building.</p>
                    </Col>
                </Row>
                <AddressCard /> 
            </Container>
            <FooterLarge />
        </React.Fragment>
    );
}