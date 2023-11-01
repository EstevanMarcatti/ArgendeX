import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './css_geral.css'

function Add(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/*todo list seleção de hora - serve para alterar a hora dos compromissos*/}
      <div id='propshora'>
        <div id='duplahora'>
        <Button variant="primary" onClick={handleShow} id='butthora'>
          {props.hora00}
        </Button>
        <Button variant="primary" onClick={handleShow} id='butthora'>
          {props.hora15}
        </Button>
        </div>
          <div>
          <Button variant="primary" onClick={handleShow} id='butthora'>
          {props.hora30}
        </Button>
        <Button variant="primary" onClick={handleShow} id='butthora'>
          {props.hora45}
        </Button>
          </div>
      </div>

          {/*todo list add tarefa - corpo principal do todo list */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title id='addtarefa'>Adicionar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
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
          <Button variant="secondary" onClick={handleClose}id='bttcancelar'>
            Cancelar
          </Button>
          <Button variant="dark" onClick={handleClose} id='bttsalvar'>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;