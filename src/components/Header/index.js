import React from 'react';
import { FaInfoCircle, FaUserCircle, FaChevronDown } from 'react-icons/fa';

import './styles.css';
import logoImg from '../../images/logoquerobolsa.svg';

export default function Header() {
    return(
        <header>
          <div className="main">
            <div className="option">
              <FaInfoCircle size={30} color="#007a8d" />
              <p>Ajuda</p>
            </div>
            <hr></hr>
            <img className="header-logo" src={logoImg} alt="Quero Bolsa"/>
            <hr></hr>
            <div className="option">
              <FaUserCircle size={30} color="#007a8d" />
              <p>Conta</p>
            </div>

          </div>
            <nav>
              <ul>
                <li>Minha conta</li>
                <li>Menu <FaChevronDown size={10} color="#fff" /></li>
              </ul>
            </nav>
      </header>
    )
}
