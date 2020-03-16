import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import add from './images/add.png';
import whats from './images/whats.png';
import chat from './images/chat.png';
import email from './images/email.png';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <p id="account-link">Minha conta</p>
        <h1 className='font-color'>Bolsas favoritas</h1>
        <p className='font-color'>Adicione bolsas de cursos e faculdades
          do seu interesse e receba atualizações com
          as melhores ofertas disponíveis.</p>
          <Button
          className="all-semesters"
          title="Todos os semestres"/>
          <Button
          className="second-semester"
          title="2º semestre de 2019"/>
          <Button
          className="first-semester"
          title="1º semestre de 2020"/>
          <div className="add-item">
            <img src={add} alt="adicionar bolsa" id="add-img"></img>
            <h3 className='font-color'>Adicionar bolsa</h3>
            <p className='font-color'>Clique para adicionar bolsas de cursos 
              do seu interesse.</p>
          </div>
      </main>
      <footer>
        <div className="wrap">
        <div className='footer' id='phone'>
          <img className="footer-img" src={whats} alt="whatsapp"></img>
          <label>0800 123 2222 </label>
          <p>Segunda a sexta de 8h às 22h</p>
        </div>
        <div className='footer' id='chat'>
          <img className="footer-img" src={chat} alt="chat"></img>
          <label>Chat</label>
        </div>
        <div className='footer' id='email'>
          <img className="footer-img" src={email} alt="email"></img>
          <label>E-mail</label>
        </div>
        <div className='footer' id='help'></div>
        </div>
        <p>Feito com s2 pela Quero Educação</p>
      </footer>
    </div>
  );
}

export default App;
