import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { DangerButton, SecondaryButton } from "../../styles/ModalStyle";



interface ConfirmModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  message: string ;
  onConfirm: () => void;
}

function ConfirmModal(props: ConfirmModalProps) {
  const { isOpen, onRequestClose, title, message, onConfirm } = props;

  const handleClose = () => {
    onRequestClose();
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
  
      <Modal show={isOpen} onHide={handleClose} centered>
        <ModalHeader closeButton>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <p>{message}</p>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton variant="secondar" onClick={handleClose}>
            Cancelar
          </SecondaryButton>
          <DangerButton variant="danger" onClick={handleConfirm}>
            Confirmar
          </DangerButton>
        </ModalFooter>
      </Modal>
    
  );
}

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
