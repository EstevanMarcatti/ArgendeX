import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Bttcompartilhar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='Bttcompart'>
        Compartilhe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id='bttcomp'>
          <Modal.Title>Compartilhe Sua tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Seu Email para compartilhar</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email de compartilhamento </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id='Bttcancel'>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose} className='Bttcompartilhar'>
            Compartilhar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bttcompartilhar;