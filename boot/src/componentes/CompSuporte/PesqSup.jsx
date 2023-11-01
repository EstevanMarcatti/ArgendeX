import './css_sup.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

{/*function pesquisa da barra - serve para pesquisar as principais problemas*/}
function Pesquisa() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Digite seu problema"
              className="me-2"
              aria-label="Search"
              id='barrapesquisasup'
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Pesquisa;



