import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function NavbarNav() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Navbar expand="lg" className="Navbar">
            <Container fluid className="NavbarContainer">
                <Navbar.Brand href="/" className="Brand">NEXON</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-white ms-auto"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>

                        <Nav.Item
                            className="custom-dropdown"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <Nav.Link as={NavLink} to="/login" className="nav-link">
                                Mi cuenta
                            </Nav.Link>
                            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                                <NavLink className="dropdown-item" to="/login">Iniciar Sesión</NavLink>
                                <NavLink className="dropdown-item" to="/register">Registrarse</NavLink>
                            </div>
                        </Nav.Item>

                        <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarNav;

