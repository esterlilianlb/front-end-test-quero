import React from 'react';
import {
  FaWhatsapp,
  FaRegComments,
  FaRegEnvelope,
  FaInfoCircle,
  FaRegHeart,
} from 'react-icons/fa';

import './styles.css';

export default function Footer() {
  return(
    <footer>
      <div className="footer-container">
      <div className="phone">
        <FaWhatsapp size={30} color="#fff" />
        <span><strong>0800 123 2222</strong>Segunda a sexta de 8h às 22h</span>
      </div>
      <div className="chat">
        <FaRegComments size={30} color="#fff" />
        <p>Chat</p>
      </div>
      <div className="email">
          <FaRegEnvelope size={30} color="#fff" />
          <p>E-mail</p>
      </div>
      <div className="help">
        <FaInfoCircle size={30} color="#fff" />
        <p>Ajuda</p>
      </div>
      <p id="made-with">Feito com <FaRegHeart size={20} color="#fff" /> pela Quero Educação</p>
      </div>
    </footer>
    )
}