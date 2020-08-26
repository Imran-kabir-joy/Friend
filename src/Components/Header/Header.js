import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="header-img text-center">
                        <img src={logo} alt="header logo" className="img-fluid w-75" />
                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5 nav-menu">
                        <Nav.Link href=""><FontAwesomeIcon icon={faUsers} /></Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#review">Reviewe</Nav.Link>
                        <Nav.Link href="#dev-info">Dev Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;