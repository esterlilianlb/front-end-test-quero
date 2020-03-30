import React from 'react';
import { FaInfoCircle, FaUserCircle, FaChevronDown, FaWhatsapp } from 'react-icons/fa';

import './styles.css';
import logoImg from '../../images/logoquerobolsa.svg';

export default function Header() {
    return(
        <header>
          <div className="main">

            <div className="option">
              <FaInfoCircle size={30} color="#007a8d" />
              <p className="mobile">Ajuda</p>
              <p className="web">Como funciona</p>
              <hr id ="web-hr" className="web"/>
              <FaWhatsapp className="web" size={30} color="#0fa866" />
              <span className="web" id="phone-number"><strong>0800 123 2222</strong>Envie uma mensagem ou ligue</span>
            </div>

            <hr className="mobile"/>

            <img className="header-logo" src={logoImg} alt="Quero Bolsa"/>
            
            <hr className="mobile"/>

            <div className="option">
              <FaUserCircle size={30} color="#007a8d" />
              <p className="mobile">Conta</p>
              <p className="web">Nome e Sobrenome</p>
            </div>

          </div>
            <nav>
              <ul>
                <li>Minha conta</li>
                <li className="web">Pré-matrícula</li>
                <li className="web">Bolsas favoritas</li>
                <li className="mobile">Menu <FaChevronDown size={10} color="#fff" /></li>
              </ul>
            </nav>
      </header>
    )
}
