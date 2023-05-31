import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Modal, Button} from 'react-bootstrap';

const MyModal = ({showModal, setShowModal, dosiAmmount, selectedOption, selectedSigla}) => {
  

  const handleClose = () => {
    setShowModal(false);
  };


  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedOption} {selectedSigla ? `for ${selectedSigla}` : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The total number is: {dosiAmmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;