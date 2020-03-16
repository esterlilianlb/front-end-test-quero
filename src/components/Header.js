import React from 'react';
import './Header.css';
import info from '../images/info.png';
import logoquerobolsa from '../images/logoquerobolsa.svg';
import user from '../images/user.png'

function Header() {
    return(
        <header className="main-header">
        <div className="header-top">
          <div className="header-element" id="info" >
          <img src={info} alt="info" id="info-img"></img>
          <label>Ajuda</label>
          </div>
          <img src={logoquerobolsa} alt="querobolsa-logo" id="logo"></img>
          <div className="header-element" id="user">
            <img src={user} alt="user" id="user-img"></img>
            <label>Conta</label>
          </div>
        </div>
        <div className="header-bottom">
          <p className="header-bottom-text">Minha conta</p>
          <p className="header-bottom-text">Menu</p>
        </div>
      </header>
    )
}
export default Header;