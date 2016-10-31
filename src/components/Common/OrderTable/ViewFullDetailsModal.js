import React from 'react'
import {Modal, Button} from 'react-bootstrap/lib'

export default ({show, toggle, data}) => {
  return (
    <Modal show={show} onHide={() => toggle()}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary" onClick={() => toggle()}>Close</Button>
      </Modal.Footer>

    </Modal>
  )
}
