import React from 'react';
import { createPortal } from 'react-dom';
import { CloseButton, ModalBox } from './Modal.style';

interface ModalProps {
  onOpen: boolean,
  children: any,
  onClose: () => void,
  top: string,
  left: string
}

function Modal({
  onOpen, children, onClose, top, left,
}: ModalProps) {
  if (!onOpen) {
    return null;
  }
  const node = document.getElementById('root');

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <ModalBox style={{ top, left }}>
      <div>{children}</div>
      <CloseButton onClick={handleClose} primary>
        Close
      </CloseButton>
    </ModalBox>,
      node,
  );
}

export default Modal;
