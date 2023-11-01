import './css_geral.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Anotacoes from './Anotacoes'

function Perfil() {
  const [smShow, setSmShow] = useState(false);
{/*corpo principal da aba perfil - serve para o usuario ver seus dados*/}
  return (
     
    <>
      <Button onClick={() => setSmShow(true)} className="me-2" id='button_perfil'>
        <img src="https://thumbs2.imgbox.com/67/4f/St9N6SJO_t.png" alt="" id='fotoperfil'/>
      </Button>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src="https://thumbs2.imgbox.com/67/4f/St9N6SJO_t.png" alt="" id='fotoperfil2'/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <h1 id='h1lemb'>Principais Lembretes</h1>
                <Anotacoes/>
            </div>
        </Modal.Body>
      </Modal>
      </>
  );
}

export default Perfil;

