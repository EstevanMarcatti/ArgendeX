import './css_geral.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

{/*function pesquisa da barra - serve para o usuario averiguar lembretes especificos*/}
function Pesquisa() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://thumbs2.imgbox.com/8f/f7/O2W2p42o_t.jpg" alt="" id='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar..."
              className="me-2"
              aria-label="Search"
              id='barrapesquisa'
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Pesquisa;



