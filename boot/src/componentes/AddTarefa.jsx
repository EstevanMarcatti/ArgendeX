import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './css_geral.css'

import Impor from './Impor';

import Alerta from './alerta';

import Data from './Data';

import Bttcompartilhar from './Bttcompartilhar';


function AddTarefa() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id='buttonlembrete'>
        Adicionar <br /> Tarefa
      </Button>

      <Modal show={show} onHide={handleClose}  >
        <Modal.Header id='headermodal'>
          <Modal.Title>Adicionar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body id='bodymodal'>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            </Form.Group>

            <Data />

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
              />
              {/* botão compartilhar */}

              <Bttcompartilhar />

              {/* */}
            </Form.Group>

            <Alerta />
            <Impor />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose} id='bttcancelar'>
            Cancelar
          </Button>
          <Button variant="" onClick={handleClose} id='bttsalvar'>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTarefa;