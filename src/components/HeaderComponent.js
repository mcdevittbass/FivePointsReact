import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseURL';

//Navbar with toggler - still to do: figure out why menu is centered when toggled open instead of left aligned
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }
    
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbar navbar-expand-md navbar-light relative">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="d-block d-md-none" href="#">
                        <img src={baseUrl + "/img/FINAL_LOGO.png"} width="150" height="150" alt="Five Points Logo" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-around">
                        <Nav navbar className="navbar-nav align-items-center nav-fill w-100">
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color" to="/home">HOME</NavLink>
                            </NavItem>
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color" to="/about">ABOUT</NavLink>
                            </NavItem>
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color text-nowrap" to="/event_space">EVENT SPACE</NavLink>
                            </NavItem>
                            <NavbarBrand className="mx-auto d-none d-md-flex" href="#">
                                <img src={baseUrl + "/img/FINAL_LOGO.png"} width="150" height="150" alt="Five Points Logo" />
                            </NavbarBrand>
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color" to="/menu">MENU</NavLink>
                            </NavItem>
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color" to="/contact">CONTACT</NavLink>
                            </NavItem>
                            <NavItem className="flex-box">
                                <NavLink className="nav-link custom-color" to="/press">PRESS</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;