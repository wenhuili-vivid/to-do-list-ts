import React, {ReactElement} from 'react';
import { createPortal } from 'react-dom';
import { ModalBox, CloseButton} from './Modal.style';

export interface ModalProps {
  onOpen: boolean,
  children: ReactElement | string,
  onClose: () => void,
  top: string,
  left: string
}

function Modal({ onOpen, children, onClose, top, left }: ModalProps) {
  if (!onOpen) {
    return null;
  }
  const node: HTMLElement = document.getElementById('root')!;

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <ModalBox style={{ top, left }}>
      <section>{children}</section>
      <footer>
        <CloseButton onClick={handleClose} primary>
          Close
        </CloseButton>
      </footer>
    </ModalBox>,
      node,
  );
}

export default Modal;
