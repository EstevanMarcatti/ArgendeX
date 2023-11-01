import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css_geral.css'
import Navbar from './Navbar'

function BarraNavegacao() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*barra navegação do site - usada para se utilizar o site e suas funcionalidades*/}
      <div className='button_risco'>
        <Button variant="" onClick={handleShow}>
          <img src="https://thumbs2.imgbox.com/ff/78/j3SE39yI_t.jpg" alt="" id='tresriscos' />
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" id='modalmenu'>
        <Offcanvas.Header closeButton data-bs-theme="dark" id='escritamodal'>

          <Offcanvas.Title>
            <img src="https://thumbs2.imgbox.com/8f/f7/O2W2p42o_t.jpg" alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BarraNavegacao;