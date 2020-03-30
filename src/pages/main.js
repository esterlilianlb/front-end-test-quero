import React from 'react'
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import MyModal from './Modal';

import { FaChevronLeft, FaPlusCircle } from 'react-icons/fa';

import './main.css';


export default function Main() {
  

  return (
    <div>
      <Header/>
      
      <main className="container">
        <p className="mobile"><FaChevronLeft size={10} color="#007a8d" /> Minha conta</p>
        <ul className="web">
          <li><a href="/">Home</a>/</li>
          <li><a href="/">Minha conta</a>/</li>
          <li><a href="/">Bolsas favoritas</a></li>
        </ul>
        
        <h1>Bolsas favoritas</h1>
        
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse
          e receba atualizações com as melhores ofertas disponíveis.
        </p>
        
        <div className="buttons">
          <Button id="button-top" title="Todos os semestres" />
          <Button title="2º semestre de 2019" />
          <Button id="button-bottom" title="1º semestre de 2020" />
        </div>

        <div className="addFavorite">
          <FaPlusCircle size={80} color="#18acc4" onClick={MyModal} />
          <h3>Adicionar bolsa</h3>
          <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

