import './css_sup.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" id='cardsedit'>
      <Container fluid>
      <Navbar.Brand><h1>{props.txtcard}</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              menuVariant="dark"
            >
              <NavDropdown.Item id='maisopcoes' href="#action/3.1">{props.action1}</NavDropdown.Item>
              <NavDropdown.Item id='maisopcoes' href="#action/3.2">
              {props.action2}
              </NavDropdown.Item>
              <NavDropdown.Item id='maisopcoes' href="#action/3.3">{props.action3}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id='maisopcoes' href="#action/3.4">
              {props.action4}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;