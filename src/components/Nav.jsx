import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavbarNav() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Navbar expand="lg" className="Navbar">
            <Container fluid className="NavbarContainer">
                {/* Marca separada del menú */}
                <Navbar.Brand href="#home" className="Brand">NEXON</Navbar.Brand>

                {/* Toggle (Botón de hamburguesa) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-white ms-auto"/>

                {/* Menú de navegación alineado a la derecha */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Productos</Nav.Link>

                        <NavDropdown
                            title="Mi cuenta"
                            className="Dropdown"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <NavDropdown.Item href="#action/3.1">Iniciar Sesión</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Registrarse</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link href="#deets">Carrito</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarNav;
