import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Suporte from './Suporte';
import './css_geral.css'

function BrandExample() {
  return (
    <>
      {/*sub menu lateral de configuração */}
      <Navbar className="bg-body-tertiary" >
        <Container >
          <Navbar.Brand > <img src="https://thumbs2.imgbox.com/80/af/gTu9QUqn_t.png" alt="" id='button_menu' />Home</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary" >
        <Container >
          <Navbar.Brand > <img src="https://thumbs2.imgbox.com/b0/95/3PwENDtW_t.png" alt="" id='button_menu' />Lembretes</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary" >
        <Container >
          <Navbar.Brand > <img src="https://thumbs2.imgbox.com/6a/f3/WGsE3bgv_t.png" alt="" id='button_menu' />Feriados</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary" >
        <Container >
          <Navbar.Brand > <img src="https://thumbs2.imgbox.com/ef/a2/3oUEMBtk_t.png" alt="" id='button_menu' />Configuração</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary" >
        <Container >

          <Navbar.Brand> <img src="https://thumbs2.imgbox.com/43/63/8S6MlC98_t.png" alt="" id='button_menu' /><Suporte/></Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;