import React from 'react';
import Modal from 'react-modal';

import './Modal.css';

export default function myModal() {
  return(
    <div>
    <span>close</span>
    <Modal>
      <h1>Adicionar bolsa</h1>
    </Modal>

    </div>
  )
}